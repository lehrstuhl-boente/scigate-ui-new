<template>
  <label class="flex items-center hover:bg-black/5 px-1 rounded" :name="engine.id">
    <input type="checkbox" class="mr-2" v-model="engine.checked">
    <div class="flex justify-between items-center w-full">
      <span>{{ engine.title }}</span>
      <LoadingSpinnerSmall v-if="engine.loading" class="opacity-40 ml-2" />
      <span class="text-sm ml-2" v-else-if="engine.totalResultsCount !== undefined">
        ({{ engine.totalResultsCount }})
      </span>
      <img src="/icons/error.svg" v-else-if="engine.error" class="w-[20px] h-[20px]" />
    </div>
  </label>
</template>

<script lang="ts" setup>
const { engine } = defineProps<{ engine: StoreEngine }>();

const searchStore = useSearchStore();

watch(() => engine.checked, (newValue, oldValue) => {
  searchStore.showApplyFilterButton = true;
  // save state of checkbox to localstorage in order to preserve it after page refresh
  localStorage.setItem('filter.engines.' + engine.id, engine.checked.toString());
});
</script>