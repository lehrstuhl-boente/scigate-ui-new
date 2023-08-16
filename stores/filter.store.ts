export const useFilterStore = defineStore('filter-store', () => {
  const filters = ref<Filter[]>([]);

  function addFilter(filter: Filter) {
    // remove old filter if there was already a filter object with the same ID in the store
    filters.value = filters.value.filter((tmpFilter) => tmpFilter.id != filter.id);
    // add filter with option object to store
    filters.value.push(filter);
  }

  function getFilterById(id: string) {
    return useFind(filters.value, { id });
  }

  function $reset() {
    filters.value = [];
  }

  return {
    filters,
    addFilter,
    getFilterById,
    $reset,
  };
});
