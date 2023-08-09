<template>
  <div class="pr-3 md:mb-10">
    <Filter v-for="filter in filters" :filter="filter" />
    <FilterEngine />
  </div>
</template>

<script lang="ts" setup>
const filterStore = useFilterStore();

const { body: filters } = await queryContent<{ body: Filter[] }>('filters').findOne();

filterStore.$reset();
</script>