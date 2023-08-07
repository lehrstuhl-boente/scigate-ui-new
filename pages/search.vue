<template>
  <div class="flex flex-col md:flex-row gap-5">
    <Sidebar class="md:w-1/3" />
    <div class="md:w-2/3">
      <div>
        <ResultItem v-for="item in searchStore.hitlist" :item="item" />
      </div>
      <div class="flex justify-center mb-7" v-if="searchStore.status == 'loading'">
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

const searchStoreData = localStorage.getItem('search-store');
if (searchStoreData !== null) {
  searchStore.$patch(JSON.parse(searchStoreData));
} else {
  await searchStore.initializeEngines();
}

if (filterStore.filters.length == 0) {
  await filterStore.initializeFilters();
}

if (searchStore.query !== '') {
  searchStore.initialLoadResults();
}

searchStore.$subscribe((mutation, state) => {
  localStorage.setItem('search-store', JSON.stringify(state));
  if (state.status == 'newSearch') {
    state.status = 'ok';
    navigateTo('/search/?s=' + encodeURIComponent(searchStore.query));
    searchStore.initialLoadResults();
  }
});

// automatically load results when scrolled to bottom
const handleScroll = () => {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (window.scrollY >= (scrollableHeight - 50)) {
    if (searchStore.status != 'loading' && !searchStore.allResultsLoaded) {
      searchStore.loadResults();
    }
  }
};
window.addEventListener('scroll', handleScroll);
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>