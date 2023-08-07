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
    async initializeFilters() {
      const { body: filters } = await queryContent<{ body: Filter[] }>('filters').findOne();
      // make filter options right shape
      for (const filter of filters) {
        if (filter.type == 'checkbox') {
          let tmpOptions: Option[] = [];
          const tmpCheckboxFilter = filter as { options: string[] } & Filter;
          const checkboxFilter = filter as FilterCheckbox;
          for (const optionName of tmpCheckboxFilter.options) {
            tmpOptions.push({
              name: optionName,
              count: 0,
              checked: false,
            });
          }
          checkboxFilter.options = tmpOptions;
        }
      }
      this.filters = filters;
    },
    noCheckboxChecked(filterId: string) {
      return false;
    },
  },
});
