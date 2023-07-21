<template>
  <div>
    <label>
      {{ $t(`filters.${filter.id}`) }}
      <input type="checkbox">
    </label>
  </div>
</template>

<script setup>
const { filter } = defineProps({ filter: { required: true, type: Object } });
</script>