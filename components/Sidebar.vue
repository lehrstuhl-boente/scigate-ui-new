<template>
  <div class="pr-3">
    <Filter v-for="filter in filterStore.filters" :filter="filter" />
    <FilterEngine />
  </div>
</template>

<script lang="ts" setup>
const filterStore = useFilterStore();
</script>