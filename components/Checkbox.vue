<template>
  <label class="flex items-center hover:bg-black/5 px-1 rounded" :name="option">
    <input type="checkbox" class="mr-2" v-model="option.checked" @change="onCheckboxChange">
    <div class="flex justify-between items-center w-full">
      <span v-if="option.name == 'noAssignment'">
        {{ $t('noAssignment') }}
      </span>
      <span v-else>
        {{ $t(`filters.${filterId}.${option.name}`) }}
      </span>
    </div>
  </label>
</template>

<script lang="ts" setup>
const { option, filterId } = defineProps<{ option: Option, filterId: string }>();

const searchStore = useSearchStore();

const onCheckboxChange = () => {
  searchStore.showApplyFilterButton = true;
  // save state of checkbox to localstorage in order to preserve it after page refresh
  localStorage.setItem(`filter.${filterId}.${option.name}`, option.checked.toString());
}
</script>