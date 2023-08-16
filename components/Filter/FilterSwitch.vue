<template>
  <div>
    <label class="flex justify-between items-center px-1 hover:bg-black/5 rounded">
      {{ $t(`filters.${filter.id}`) }}
      <input type="checkbox" class="pt-1 ml-2" v-model="storeFilter.active">
    </label>
  </div>
</template>

<script lang="ts" setup>
const { filter } = defineProps<{ filter: FilterSwitch }>();

const filterStore = useFilterStore();

filterStore.addFilter(filter);
// read filter object from store again in order to use it as prop for Checkbox (only that way it's reactive)
const storeFilter = filterStore.getFilterById(filter.id) as FilterSwitch;

storeFilter.active = false;
if (localStorage.getItem(`filter.${filter.id}.active`) === 'true') {
  storeFilter.active = true;
}

watch(() => filter.active, (newValue, oldValue) => {
  // save state of checkbox to localstorage in order to preserve it after page refresh
  localStorage.setItem(`filter.${filter.id}.active`, filter.active.toString());
});
</script>