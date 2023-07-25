const config = useRuntimeConfig();

interface SearchState {
  query: string;
  hitlist: ResultItem[];
  status: 'loading' | 'ok';
}

interface ResponseStubs {
  filter: string;
  hitlist: ResultItem[];
  searchterm: string;
  start: number;
  status: string;
}

export const useSearchStore = defineStore('engine-store', {
  state: (): SearchState => {
    return {
      query: '',
      hitlist: [],
      status: 'ok',
    };
  },
  actions: {
    async search(start: number = 0) {
      this.hitlist = [];
      this.status = 'loading';
      const { body: engines } = await queryContent('engines').findOne();
      const enginesResults: ResultItem[][] = [];
      let mostResults = 0;
      // collect the results of all engines
      for (const engine of engines) {
        const body = {
          engine: engine.id,
          term: this.query,
          type: 'hitlist',
          start,
        };
        const { data } = await useFetch<ResponseStubs>('/stubs', {
          baseURL: config.public.baseURL,
          body,
          method: 'POST',
        });
        if (data.value && data.value.hitlist.length > 0) {
          // show the first result of every engine immediately, to avoid long loading times
          const resultItem = data.value.hitlist.shift();
          if (resultItem != undefined) {
            this.hitlist.push(resultItem);
          }
          enginesResults.push(data.value.hitlist);
          mostResults = Math.max(mostResults, data.value.hitlist.length);
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
