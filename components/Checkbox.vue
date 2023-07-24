<template>
  <label class="flex hover:bg-black/5 px-1 rounded" :name="option">
    <input type="checkbox" class="mr-2">
    <div class="flex justify-between w-full">
      <span v-if="filterId == 'engines'">
        {{ option }}
      </span>
      <span v-else-if="option == 'noAssignment'">
        {{ $t(option) }}
      </span>
      <span v-else>
        {{ $t(`filters.${filterId}.${option}`) }}
      </span>
      <span v-if="count != undefined">
        ({{ count }})
      </span>
    </div>
  </label>
</template>

<script setup>
const { option, count, filterId } = defineProps({
  option: { required: true, type: String },
  count: { type: Number },
  filterId: { required: true, type: String },
});
</script>