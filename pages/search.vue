<template>
  <div class="flex flex-col md:flex-row gap-5">
    <Sidebar class="md:w-1/3" />
    <div class="md:w-2/3">
      <ResultItem v-for="item in searchStore.hitlist" :item="item" />
      {{ searchStore.hitlist.length }}
      {{ searchStore.status }}
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'search'
});

const searchStore = useSearchStore();
</script>