<template>
  <label class="flex hover:bg-black/5 px-1 rounded" :name="engine.id">
    <input type="checkbox" class="mr-2" v-model="engine.checked">
    <div class="flex justify-between items-center w-full">
      {{ engine.title }}
    </div>
  </label>
</template>

<script lang="ts" setup>
const { engine } = defineProps<{ engine: StoreEngine }>();
</script>