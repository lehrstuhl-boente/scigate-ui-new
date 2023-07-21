<template>
  <div class="pr-3">
    <Filter v-for="filter in filters" :filter="filter" />
  </div>
</template>

<script setup>
const { body: filters } = await queryContent('filters').findOne();
</script>