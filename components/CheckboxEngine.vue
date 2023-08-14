<template>
  <label class="flex items-center hover:bg-black/5 px-1 rounded"
    :class="{ 'opacity-40 hover:bg-inherit pointer-events-none': engine.totalResultsCount === 0 }" :name="engine.id">
    <input type="checkbox" class="mr-2" v-model="engine.checked">
    <div class="flex justify-between items-center w-full">
      <span>{{ engine.title }}</span>
      <span class="text-sm" v-if="!engine.loading">
        ({{ engine.totalResultsCount }})
      </span>
      <LoadingSpinnerSmall v-else />
    </div>
  </label>
</template>

<script lang="ts" setup>
const { engine } = defineProps<{ engine: StoreEngine }>();

// save state of checkbox to localstorage in order to preserve it after page refresh
watch(engine, (newEngine, oldEngine) => {
  localStorage.setItem('filter.engines.' + engine.id, newEngine.checked.toString());
});
</script>