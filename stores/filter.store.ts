interface FilterState {
  dateFilters: FilterDate[];
  checkboxFilters: FilterCheckbox[];
  switchFilters: FilterSwitch[];
}

export const useFilterStore = defineStore('filter-store', {
  state: (): FilterState => {
    return {
      dateFilters: [],
      checkboxFilters: [],
      switchFilters: [],
    };
  },
  actions: {},
});
