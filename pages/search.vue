<template>
  <div class="flex flex-col md:flex-row gap-5">
    <Sidebar class="md:w-1/3" />
    <div class="md:w-2/3">hitlist</div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'search'
});
</script>