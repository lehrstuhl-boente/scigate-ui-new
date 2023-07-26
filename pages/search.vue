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
      <button v-else class="bg-black text-white hover:bg-black/80 active:bg-black/70 py-1 px-2 rounded text-sm"
        @click="loadMore">
        Load More
      </button>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'search'
});

const searchStore = useSearchStore();

const loadMore = () => {
  searchStore.loadResults();
};
</script>