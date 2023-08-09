<template>
  <div class="mb-5">
    <h3>{{ $t(filter.id) }}</h3>
    <div class="mt-2">
      <FilterCheckbox v-if="filter.type == 'checkbox'" :filter="(filter as FilterCheckboxRaw)" />
      <FilterDate v-else-if="filter.type == 'date'" :filter="(filter as FilterDate)" />
      <FilterSwitch v-else-if="filter.type == 'switch'" :filter="(filter as FilterSwitch)" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { filter } = defineProps<{ filter: Filter }>();
</script>