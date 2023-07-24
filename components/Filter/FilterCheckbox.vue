<template>
  <div>
    <Checkbox option="noAssignment" :filterId="filter.id" :count="0" v-if="filter.id != 'engines'" />
    <Checkbox v-for="option in filter.options" :option="option" :filterId="filter.id" :count="0" />
  </div>
</template>

<script setup>
const { filter } = defineProps({ filter: { required: true, type: Object } });
</script>