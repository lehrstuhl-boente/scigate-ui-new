<template>
  <div>
    <Checkbox v-for="option in filter.options" :option="option" :filterId="filter.id" :count="0" />
  </div>
</template>

<script lang="ts" setup>
const { filter } = defineProps<{ filter: FilterCheckbox }>();
</script>