<template>
  <div class="bg-white shadow-lg rounded-xl">
    <div class="p-3 flex justify-center">
      <img :src="`/engines/${engine.id}.svg`" :alt="`${engine.title} logo`" class="h-[50px] w-3/4">
    </div>
    <div class="px-4 pb-3 items-center text-center">
      <div class="line-clamp-1">{{ engine.title }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { engine } = defineProps(['engine']);
</script>