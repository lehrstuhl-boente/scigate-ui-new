interface FilterState {
  filters: Filter[];
}

export const useFilterStore = defineStore('filter-store', {
  state: (): FilterState => {
    return {
      filters: [],
    };
  },
  actions: {},
});
