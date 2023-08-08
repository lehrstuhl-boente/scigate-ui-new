const config = useRuntimeConfig();

interface SearchState {
  engines: StoreEngine[];
  query: string;
  hitlist: ResultItem[];
  status: 'loading' | 'ok' | 'newSearch';
}

interface ResponseHitlist {
  filter: string;
  hitlist: ResultItem[];
  searchterm: string;
  start: number;
  status: string;
}

interface ResponseSearch {
  status: string;
  hits: number;
}

export const useSearchStore = defineStore('search-store', {
  state: (): SearchState => {
    return {
      query: '',
      hitlist: [],
      status: 'ok',
      engines: [],
    };
  },
  getters: {
    // whether all engines have loaded all available results
    allResultsLoaded(state) {
      for (const engine of state.engines) {
        if (!engine.allResultsLoaded) return false;
      }
      return true;
    },
    // whether all engines have checked=false --> same as all checked=true
    allEnginesUnchecked(state) {
      for (const engine of state.engines) {
        if (engine.checked) return false;
      }
      return true;
    },
  },
  actions: {
    async initializeEngines() {
      const { body: engines } = await queryContent('engines').only('body').findOne();
      this.engines = engines;
      this.engines.forEach((engine) => {
        engine.allResultsLoaded = false;
        engine.resultsCount = 0;
        if (localStorage.getItem('filter.engines.' + engine.id) === 'true') {
          engine.checked = true;
        } else {
          engine.checked = false;
        }
      });
    },
    // called the first time
    async initialLoadResults() {
      this.hitlist = [];
      this.engines.forEach(async (engine) => {
        engine.allResultsLoaded = false;
        engine.resultsCount = 0;
        const body = {
          engine: engine.id,
          term: this.query,
          type: 'search',
          filters: useFilterStore().filters,
        };
        const res = await $fetch<ResponseSearch>('/stubs', {
          baseURL: config.public.baseURL,
          body,
          method: 'POST',
        });
        engine.totalResultsCount = res.hits;
      });
      this.loadResults();
    },
    // directly called when loading more results
    async loadResults() {
      if (this.query == '') return;
      this.status = 'loading';
      const enginesResults: ResultItem[][] = [];
      let mostResults = 0;
      // collect the results of all engines
      for (const engine of this.engines) {
        if (!this.allEnginesUnchecked && !engine.checked) continue;
        if (engine.allResultsLoaded) continue;
        const body = {
          engine: engine.id,
          term: this.query,
          type: 'hitlist',
          start: engine.resultsCount,
          filters: useFilterStore().filters,
        };
        const { data } = await useFetch<ResponseHitlist>('/stubs', {
          baseURL: config.public.baseURL,
          body,
          method: 'POST',
        });
        if (data.value && data.value.hitlist) {
          if (data.value.hitlist.length > 0) {
            engine.resultsCount += data.value.hitlist.length;
            // show the first result of every engine immediately, to avoid long loading times
            const resultItem = data.value.hitlist.shift();
            if (resultItem != undefined) {
              this.hitlist.push(resultItem);
            }
            enginesResults.push(data.value.hitlist);
            mostResults = Math.max(mostResults, data.value.hitlist.length);
          } else {
            // empty hitlist because no results for search term and filters
            engine.allResultsLoaded = true;
          }
        } else {
          // error because already everything loaded
          engine.allResultsLoaded = true;
        }
      }
      // write always the first result of every engine to the hitlist (round robin?)
      for (let i = 0; i < mostResults; i++) {
        for (const engineResults of enginesResults) {
          const resultItem = engineResults.shift();
          if (resultItem != undefined) {
            this.hitlist.push(resultItem);
          }
        }
      }
      this.status = 'ok';
    },
  },
});
