export const useFilterStore = defineStore('filter-store', () => {
  const filters = ref<Filter[]>([]); // filter values are always in sync with the UI
  const filtersCopy = ref<Filter[]>([]); // holds the filter values that were used the last time initialLoadResults is called

  // loading of values from localStorage must be done here, not in the component, so that filters are ready when initialLoadResults is called on reload
  async function initializeFilters() {
    const { body: tmpFilters } = await queryContent<{ body: Filter[] }>('filters').findOne();
    for (const filter of tmpFilters) {
      switch (filter.type) {
        case 'checkbox':
          // bring options array of filter in right shape
          let tmpOptions: Option[] = [];
          for (const optionName of (filter as FilterCheckboxRaw).options) {
            let checked = false;
            if (localStorage.getItem(`filter.${filter.id}.${optionName}`) === 'true') {
              checked = true;
            }
            tmpOptions.push({
              name: optionName,
              count: 0,
              checked,
            });
          }
          (filter as FilterCheckbox).options = tmpOptions;
          break;
        case 'switch':
          (filter as FilterSwitch).active = false;
          if (localStorage.getItem(`filter.${filter.id}.active`) === 'true') {
            (filter as FilterSwitch).active = true;
          }
          break;
        case 'date':
          const storageFrom = localStorage.getItem('filter.date.from');
          if (storageFrom) (filter as FilterDate).from = parseInt(storageFrom);
          const storageTo = localStorage.getItem('filter.date.to');
          if (storageTo) (filter as FilterDate).to = parseInt(storageTo);
          break;
      }
    }
    filters.value = tmpFilters;
  }

  function getFilterById(id: string) {
    return useFind(filters.value, { id });
  }

  function $reset() {
    filters.value = [];
  }

  return {
    filters,
    filtersCopy,
    initializeFilters,
    getFilterById,
    $reset,
  };
});
