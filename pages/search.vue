<template>
  <div class="flex flex-col md:flex-row gap-5">
    <div class="md:w-1/3 bg-blue-50">sidebar</div>
    <div class="md:w-2/3 bg-green-50">hitlist</div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'search'
});
</script>