interface SearchState {
  query: string;
}

export const useSearchStore = defineStore('engine-store', {
  state: (): SearchState => {
    return {
      query: '',
    };
  },
  actions: {},
});
