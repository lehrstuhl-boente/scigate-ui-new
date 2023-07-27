<template>
  <label class="flex hover:bg-black/5 px-1 rounded" :name="option">
    <input type="checkbox" class="mr-2">
    <div class="flex justify-between items-center w-full">
      <span v-if="filterId == 'engines'">
        {{ option }}
      </span>
      <span v-else-if="option.name == 'noAssignment'">
        {{ $t('noAssignment') }}
      </span>
      <span v-else>
        {{ $t(`filters.${filterId}.${option}`) }}
      </span>
    </div>
  </label>
</template>

<script lang="ts" setup>
const { option, filterId } = defineProps<{ option: Option, filterId: string }>();
</script>