const config = useRuntimeConfig();

interface SearchState {
  query: string;
  hitlist: ResultItem[];
  status: 'loading' | 'ok';
}

interface ResultItem {
  description: string[];
  url: string;
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
      for (let engine of engines) {
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
        if (data.value) {
          this.hitlist.push(...data.value.hitlist);
        }
      }
      this.status = 'ok';
    },
  },
});
