<template>
  <div class="p-3 bg-white mb-8 rounded-lg shadow-md relative">
    <span class="py-1 px-2 bg-white text-xs border rounded-md absolute right-3 -top-5">{{ engineName }}</span>
    <a :href="item.url" class="hover:underline" target="_blank">
      <h2>{{ item.description[0] }}</h2>
    </a>
    <div class="my-1">{{ item.description[1] }}</div>
    <div class="text-sm text-muted">{{ item.description[2] }}</div>
  </div>
</template>

<script lang="ts" setup>
const { item } = defineProps<{ item: ResultItem }>();
const { body: engines } = await queryContent<{ body: Engine[] }>('engines').only('body').findOne();

let engineName = item.engineId;
const engine = engines.find(engine => engine.id == item.engineId);
if (engine != undefined) {
  engineName = engine.title;
}
</script>