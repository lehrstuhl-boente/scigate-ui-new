<template>
  <div class="pr-3 md:mb-10 relative flex flex-col">
    <Filter v-for="filter in filterStore.filters" :filter="filter" />
    <FilterEngine />
    <button
      class="bg-white border py-1 px-2 rounded-md shadow-lg sticky bottom-20 md:bottom-20 hover:bg-gray-50 active:scale-95 active:shadow-md transition-default mb-10 md:mb-0"
      @click="applyFilters" v-if="searchStore.showApplyFilterButton">
      {{ $t('applyFilter') }}
    </button>
  </div>
</template>

<script lang="ts" setup>
const filterStore = useFilterStore();
const searchStore = useSearchStore();

const applyFilters = () => {
  searchStore.initialLoadResults();
}
</script>