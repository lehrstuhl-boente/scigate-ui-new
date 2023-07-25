<template>
  <div class="p-3 bg-white mb-4 rounded-lg shadow-md">
    <a :href="item.url" class="hover:underline" target="_blank">
      <h2>{{ item.description[0] }}</h2>
    </a>
    <div class="font-small my-1">{{ item.description[1] }}</div>
    <div class="text-sm text-muted">{{ item.description[2] }}</div>
  </div>
</template>

<script lang="ts" setup>
const { item } = defineProps<{ item: ResultItem }>()
</script>