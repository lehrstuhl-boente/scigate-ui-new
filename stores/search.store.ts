const config = useRuntimeConfig();

interface ResponseSearch {
  status: string;
  hits: number;
}

interface ResponseHitlist {
  filter: string;
  hitlist: ResultItem[];
  searchterm: string;
  start: number;
  status: string;
}

export const useSearchStore = defineStore('search-store', () => {
  const query = ref<string>('');
  const hitlist = ref<ResultItem[]>([]);
  const status = ref<'loading' | 'ok' | 'newSearch'>('ok');
  const engines = ref<StoreEngine[]>([]); // checked property of these StoreEngines is always in sync with the checkboxes in the UI
  const enginesCopy = ref<EngineCopy[]>([]); // checked property is the same as the last time initialLoadResults was called --> filters don't change when loading more results
  const showApplyFilterButton = ref<boolean>(false);

  // whether all engines have loaded all available results
  const allResultsLoaded = computed(() => {
    for (const engine of engines.value) {
      if (!engine.allResultsLoaded) return false;
    }
    return true;
  });

  // whether all engines have checked=false --> same as all checked=true
  const allEnginesUnchecked = computed(() => {
    for (const engine of engines.value) {
      if (engine.checked) return false;
    }
    return true;
  });

  async function initializeEngines() {
    const { body: rawEngines } = await queryContent('engines').only('body').findOne();
    engines.value = rawEngines;
    engines.value.forEach((engine: StoreEngine) => {
      engine.allResultsLoaded = false;
      engine.resultsCount = 0;
      engine.loading = false;
      if (localStorage.getItem('filter.engines.' + engine.id) === 'true') {
        engine.checked = true;
      } else {
        engine.checked = false;
      }
    });
  }

  // called the first time
  async function initialLoadResults() {
    showApplyFilterButton.value = false;
    hitlist.value = [];
    enginesCopy.value = structuredClone(toRaw(engines.value));
    loadResults();
    engines.value.forEach(async (engine) => {
      engine.allResultsLoaded = false;
      engine.resultsCount = 0;
      const body = {
        engine: engine.id,
        term: query.value,
        type: 'search',
        filters: useFilterStore().filters,
      };
      engine.loading = true;
      const res = await $fetch<ResponseSearch>('/stubs', {
        baseURL: config.public.baseURL,
        body,
        method: 'POST',
      });
      engine.loading = false;
      engine.totalResultsCount = res.hits;
    });
  }

  // directly called (not via initialLoadResults) when loading more results
  async function loadResults() {
    if (query.value == '') return;
    status.value = 'loading';
    const enginesPromises = [];
    const enginesResults: ResultItem[][] = [];
    let mostResults = 0;
    // collect the results of all engines
    for (const engine of engines.value) {
      const engineCopy = getObject<EngineCopy>(enginesCopy.value, { id: engine.id });
      if (!allEnginesUnchecked.value && !engineCopy.checked) continue; // use copy because checked property in the original could have changed in the meantime
      if (engine.allResultsLoaded) continue;
      const body = {
        engine: engine.id,
        term: query.value,
        type: 'hitlist',
        start: engine.resultsCount,
        filters: useFilterStore().filters,
      };
      const enginePromise = new Promise<void>((resolve, reject) => {
        $fetch<ResponseHitlist>('/stubs', {
          baseURL: config.public.baseURL,
          body,
          method: 'POST',
        }).then((data) => {
          if (data && data.hitlist) {
            if (data.hitlist.length > 0) {
              engine.resultsCount += data.hitlist.length;
              // show the first result of every engine immediately, to avoid long loading times
              const resultItem = data.hitlist.shift();
              if (resultItem != undefined) {
                hitlist.value.push(resultItem);
              }
              enginesResults.push(data.hitlist);
              mostResults = Math.max(mostResults, data.hitlist.length);
            } else {
              // empty hitlist because no results for search term and filters
              engine.allResultsLoaded = true;
            }
          } else {
            // error because already everything loaded
            engine.allResultsLoaded = true;
          }
          resolve();
        });
      });
      enginesPromises.push(enginePromise);
    }
    await Promise.all(enginesPromises);
    // write always the first result of every engine to the hitlist (round robin?)
    for (let i = 0; i < mostResults; i++) {
      for (const engineResults of enginesResults) {
        const resultItem = engineResults.shift();
        if (resultItem != undefined) {
          hitlist.value.push(resultItem);
        }
      }
    }
    status.value = 'ok';
  }

  return {
    query,
    hitlist,
    status,
    engines,
    showApplyFilterButton,
    allResultsLoaded,
    initializeEngines,
    initialLoadResults,
    loadResults,
  };
});
