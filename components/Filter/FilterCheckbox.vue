<template>
  <div>
    <button class="mx-1 rounded-md text-xs mb-2 hover:opacity-70 active:opacity-50" v-if="!allOptionsChecked">
      {{ $t('selectAll') }}
    </button>
    <button class="mx-1 rounded-md text-xs mb-2 hover:opacity-70 active:opacity-50" v-else>
      {{ $t('deselectAll') }}
    </button>
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

// assign options to clone of filter object to avoid errors on hot-reload
const filterClone: FilterCheckbox = structuredClone(filter as unknown as FilterCheckbox);
filterClone.options = tmpOptions

filterStore.addFilter(filterClone);
// read filter object from store again in order to use it as prop for Checkbox (only that way it's reactive)
const storeFilter = filterStore.getFilterById<FilterCheckbox>(filter.id);

const allOptionsChecked = ref(true);

const checkIfAllOptionsChecked = (options: Option[]) => {
  for (const option of options) {
    if (!option.checked) {
      allOptionsChecked.value = false;
      return;
    }
  }
  allOptionsChecked.value = true;
}
checkIfAllOptionsChecked(storeFilter.options); // on reload

watch(storeFilter.options, (newOptions, oldOptions) => {  // on 
  checkIfAllOptionsChecked(newOptions);
});
</script>