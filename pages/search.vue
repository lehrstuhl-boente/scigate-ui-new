<template>
  <div class="flex flex-col md:flex-row gap-5">
    <Sidebar class="md:w-1/3" />
    <div class="md:w-2/3">
      <div>
        <ResultItem v-for="item in searchStore.hitlist" :item="item" />
      </div>
      <div class="flex justify-center" v-if="searchStore.status == 'loading'">
        <LoadingSpinner />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'search'
});

const searchStore = useSearchStore();
const filterStore = useFilterStore();

if (filterStore.filters.length == 0) {
  await filterStore.initializeFilters();
}

const handleScroll = () => {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (window.scrollY >= (scrollableHeight - 50)) {
    if (searchStore.status != 'loading' && !searchStore.allResultsLoaded) {
      searchStore.loadResults();
    }
  }
};

// automatically load results when scrolled to bottom
window.addEventListener('scroll', handleScroll);

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>