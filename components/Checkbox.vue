<template>
  <div>
    <label class="flex hover:bg-black/5 px-1" :name="option">
      <input type="checkbox" class="mr-2">
      <div class="flex justify-between w-full">
        <span>
          {{ $t(`filters.${filterId}.${option}`) }}
        </span>
        <span v-if="count != undefined">
          ({{ count }})
        </span>
      </div>
    </label>
  </div>
</template>

<script setup>
const { option, count, filterId } = defineProps({
  option: { required: true, type: String },
  count: { type: Number },
  filterId: { required: true, type: String },
});
</script>