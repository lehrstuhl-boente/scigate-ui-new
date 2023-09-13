<template>
  <div class="flex items-center">
    <label class="mr-3">
      <span class="mr-2">{{ $t('from') }}:</span>
      <input type="number" v-model.number="filter.from" placeholder="1990"
        class="py-1 px-2 max-w-[80px] rounded-md border" @change="handleChangeFrom">
    </label>
    <label>
      <span class="mr-2">{{ $t('to') }}:</span>
      <input type="number" v-model.number="filter.to" placeholder="2000" :min="filter.from"
        class="py-1 px-2 max-w-[80px] rounded-md border" @change="handleChangeTo">
    </label>
  </div>
</template>

<script lang="ts" setup>
const { filter } = defineProps<{ filter: FilterYear }>();

const searchStore = useSearchStore();

// save state of the two number fields to localstorage in order to preserve it after page refresh
watch(() => filter.from, () => {
  searchStore.showApplyFilterButton = true;
  if (filter.from != null) localStorage.setItem('filter.year.from', filter.from.toString());
});
watch(() => filter.to, () => {
  searchStore.showApplyFilterButton = true;
  if (filter.to != null) localStorage.setItem('filter.year.to', filter.to.toString());
});

const handleChangeFrom = () => {
  if (filter.from > filter.to && filter.to != undefined && filter.to.toString() !== '') {
    filter.from = filter.to;
  }
}

const handleChangeTo = () => {
  if (filter.from > filter.to && filter.from != undefined && filter.from.toString() !== '') {
    filter.to = filter.from;
  }
}
</script>