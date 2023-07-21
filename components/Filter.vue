<template>
  <div class="mb-5">
    <h3>{{ $t(filter.id) }}</h3>
    <div class="mt-2">
      <FilterCheckbox v-if="filter.type == 'checkbox'" :filter="filter" />
      <FilterDate v-else-if="filter.type == 'date'" :filter="filter" />
      <FilterSwitch v-else-if="filter.type == 'switch'" :filter="filter" />
    </div>
  </div>
</template>

<script setup>
const { filter } = defineProps({ filter: { required: true, type: Object } });
</script>