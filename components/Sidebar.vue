<template>
  <div class="pr-3">
    <Filter v-for="filter in filterStore.filters" :filter="filter" />
    <Filter :filter="enginesFilter" />
  </div>
</template>

<script setup>
const filterStore = useFilterStore();

const { body: engines } = await queryContent('engines').findOne();

// convert engine store to filter object
const enginesOptions = [];
for (let option of engines) {
  enginesOptions.push(option.title);
}
const enginesFilter = {
  id: 'engines',
  type: 'checkbox',
  options: enginesOptions
};
</script>