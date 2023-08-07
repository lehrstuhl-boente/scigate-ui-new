<template>
  <div class="pr-3 md:mb-10">
    <Filter v-for="filter in filterStore.filters" :filter="filter" />
    <FilterEngine />
  </div>
</template>

<script lang="ts" setup>
const filterStore = useFilterStore();
</script>