<template>
  <div>
    <label>
      {{ $t(`filters.${filter.id}`) }}
      <input type="checkbox" class="pt-1">
    </label>
  </div>
</template>

<script lang="ts" setup>
const { filter } = defineProps<{ filter: FilterSwitch }>();
</script>