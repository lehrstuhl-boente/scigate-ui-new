<template>
  <div>
    <label class="flex hover:bg-black/5" name="">
      <input type="checkbox" class="mr-2">
      <div class="flex justify-between w-full">
        <span>
          {{ text }}
        </span>
        <span v-if="count != undefined">
          ({{ count }})
        </span>
      </div>
    </label>
  </div>
</template>

<script setup>
const { text, count, name } = defineProps({
  name: { required: true, type: String },
  text: { required: true, type: String },
  count: { type: Number },
});
</script>