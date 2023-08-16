<template>
  <div class="flex items-center">
    <label class="mr-3">
      <span class="mr-2">{{ $t('from') }}:</span>
      <input type="number" v-model="storeFilter.from" placeholder="1990" class="py-1 px-2 max-w-[80px] rounded-md border">
    </label>
    <label>
      <span class="mr-2">{{ $t('to') }}:</span>
      <input type="number" v-model="storeFilter.to" placeholder="2000" class="py-1 px-2 max-w-[80px] rounded-md border">
    </label>
  </div>
</template>

<script lang="ts" setup>
const { filter } = defineProps<{ filter: FilterDate }>();

const filterStore = useFilterStore();
const searchStore = useSearchStore();

filterStore.addFilter(filter);
// read filter object from store again in order to use it as prop for Checkbox (only that way it's reactive)
const storeFilter = filterStore.getFilterById(filter.id) as FilterDate;

const storageFrom = localStorage.getItem('filter.date.from');
if (storageFrom) storeFilter.from = parseInt(storageFrom);
const storageTo = localStorage.getItem('filter.date.to');
if (storageTo) storeFilter.to = parseInt(storageTo);

// save state of the two number fields to localstorage in order to preserve it after page refresh
watch(() => storeFilter.from, () => {
  searchStore.showApplyFilterButton = true;
  if (filter.from != null) localStorage.setItem('filter.date.from', filter.from.toString());
});
watch(() => storeFilter.to, () => {
  searchStore.showApplyFilterButton = true;
  if (filter.to != null) localStorage.setItem('filter.date.to', filter.to.toString());
})
</script>