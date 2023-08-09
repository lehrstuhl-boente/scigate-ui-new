<template>
  <div>
    <Checkbox v-for="option in storeFilter.options" :option="option" :filterId="filter.id" />
  </div>
</template>

<script lang="ts" setup>
const { filter } = defineProps<{ filter: FilterCheckboxRaw }>();

const filterStore = useFilterStore();

// bring options property of filter in right shape
let tmpOptions: Option[] = [];
const tmpCheckboxFilter = filter;
for (const optionName of tmpCheckboxFilter.options) {
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
(filter as unknown as FilterCheckbox).options = tmpOptions;

// remove old filter if there was already a filter object with the same ID in the store
filterStore.filters = filterStore.filters.filter(tmpFilter => tmpFilter.id != filter.id);
// add filter with option object to store
filterStore.filters.push((filter as unknown as FilterCheckbox));
// read filter object from store again in order to use it as prop for Checkbox (only that way it's reactive)
const storeFilter = getObject<FilterCheckbox>((filterStore.filters as FilterCheckbox[]), { id: filter.id });
</script>