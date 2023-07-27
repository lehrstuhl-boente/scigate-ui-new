<template>
  <div class="flex items-center">
    <label class="mr-3">
      <span class="mr-2">{{ $t('from') }}:</span>
      <input type="number" placeholder="1990" class="py-1 px-2 max-w-[80px] rounded-md border">
    </label>
    <label>
      <span class="mr-2">{{ $t('to') }}:</span>
      <input type="number" placeholder="2000" class="py-1 px-2 max-w-[80px] rounded-md border">
    </label>
  </div>
</template>

<script lang="ts" setup>
const { filter } = defineProps<{ filter: FilterDate }>();
</script>