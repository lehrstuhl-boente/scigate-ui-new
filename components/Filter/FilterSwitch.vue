<template>
  <div>
    <label class="flex justify-between items-center px-1 hover:bg-black/5 rounded">
      {{ $t(`filters.${filter.id}`) }}
      <input type="checkbox" class="pt-1 ml-2" v-model="filter.active">
    </label>
  </div>
</template>

<script lang="ts" setup>
const { filter } = defineProps<{ filter: FilterSwitch }>();

watch(() => filter.active, (newValue, oldValue) => {
  // save state of checkbox to localstorage in order to preserve it after page refresh
  localStorage.setItem(`filter.${filter.id}.active`, filter.active.toString());
});
</script>