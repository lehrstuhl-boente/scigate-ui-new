<template>
  <div class="flex items-center">
    <span class="mr-2">{{ $t('from') }}:</span>
    <input type="number" placeholder="1990" min="0" class="px-2 py-1 max-w-[80px] rounded-md border">
    <span class="mx-2">{{ $t('to') }}:</span>
    <input type="number" placeholder="2000" min="0" class="px-2 py-1 max-w-[80px] rounded-md border">
  </div>
</template>

<script setup>
const { filter } = defineProps({ filter: { required: true, type: Object } });
</script>