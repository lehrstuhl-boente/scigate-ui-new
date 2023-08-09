interface FilterState {
  filters: Filter[];
}

export const useFilterStore = defineStore('filter-store', {
  state: (): FilterState => {
    return {
      filters: [],
    };
  },
  actions: {
    addFilter(filter: Filter) {
      // remove old filter if there was already a filter object with the same ID in the store
      this.filters = this.filters.filter((tmpFilter) => tmpFilter.id != filter.id);
      // add filter with option object to store
      this.filters.push(filter);
    },
    getFilterById<T>(id: string) {
      return getObject<T>(this.filters as T[], { id });
    },
  },
});
