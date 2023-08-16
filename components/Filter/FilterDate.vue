<template>
  <div class="flex items-center">
    <label class="mr-3">
      <span class="mr-2">{{ $t('from') }}:</span>
      <input type="number" v-model="filter.from" placeholder="1990" class="py-1 px-2 max-w-[80px] rounded-md border">
    </label>
    <label>
      <span class="mr-2">{{ $t('to') }}:</span>
      <input type="number" v-model="filter.to" placeholder="2000" class="py-1 px-2 max-w-[80px] rounded-md border">
    </label>
  </div>
</template>

<script lang="ts" setup>
const { filter } = defineProps<{ filter: FilterDate }>();

const searchStore = useSearchStore();

// save state of the two number fields to localstorage in order to preserve it after page refresh
watch(() => filter.from, () => {
  searchStore.showApplyFilterButton = true;
  if (filter.from != null) localStorage.setItem('filter.date.from', filter.from.toString());
});
watch(() => filter.to, () => {
  searchStore.showApplyFilterButton = true;
  if (filter.to != null) localStorage.setItem('filter.date.to', filter.to.toString());
});
</script>