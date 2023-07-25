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
    async search() {
      this.hitlist = [];
      this.status = 'loading';
      const { body: engines } = await queryContent('engines').findOne();
      const enginesResults: ResultItem[][] = [];
      let mostResults = 0;
      for (const engine of engines) {
        const body = {
          engine: engine.id,
          term: this.query,
          type: 'hitlist',
        };
        const { data } = await useFetch<ResponseStubs>('/stubs', {
          baseURL: config.public.baseURL,
          body,
          method: 'POST',
        });
        if (data.value && data.value.hitlist.length > 0) {
          // show the first result immediately, to avoid too long loading times
          const resultItem = data.value.hitlist.shift();
          if (resultItem != undefined) {
            this.hitlist.push(resultItem);
          }
          enginesResults.push(data.value.hitlist);
          mostResults = Math.max(mostResults, data.value.hitlist.length);
        }
      }
      for (let i = 0; i < mostResults; i++) {
        // always take the first one result (round robin)
        for (const engineResults of enginesResults) {
          const resultItem = engineResults.shift();
          if (resultItem != undefined) {
            this.hitlist.push(resultItem);
          }
        }
      }
      this.status = 'ok';
    },
    async loadMore() {},
  },
});
