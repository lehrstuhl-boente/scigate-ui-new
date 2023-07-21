<template>
  <div>
    <label>
      {{ $t(`filters.${filter.id}`) }}
      <input type="checkbox" class="pt-1">
    </label>
  </div>
</template>

<script setup>
const { filter } = defineProps({ filter: { required: true, type: Object } });
</script>