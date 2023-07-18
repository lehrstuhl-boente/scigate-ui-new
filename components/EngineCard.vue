<template>
  <a :href="engine.url" target="_blank"
    class="bg-white shadow-lg rounded-xl hover:shadow-xl hover:cursor-pointer hover:scale-105 active:scale-95">
    <div class="p-3">
      <div class="h-[50px] grid place-items-center">
        <img :src="`/engines/${engine.id}.${engine.imageFormat}`" :alt="`${engine.title} logo`" class="w-3/4"
          :class="{ 'h-[50px]': engine.imageFormat == 'svg' }">
      </div>
    </div>
    <div class="px-4 pb-3 items-center text-center">
      <div class="line-clamp-1">{{ engine.title }}</div>
    </div>
  </a>
</template>

<script lang="ts" setup>
const { engine } = defineProps(['engine']);
</script>