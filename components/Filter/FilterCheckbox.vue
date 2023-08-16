<template>
  <div>
    <SelectAll :options="filter.options" />
    <Checkbox v-for="option in filter.options" :option="option" :filterId="filter.id" />
  </div>
</template>

<script lang="ts" setup>
const { filter } = defineProps<{ filter: FilterCheckbox }>();
</script>