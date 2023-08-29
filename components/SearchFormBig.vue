<template>
  <form @submit.prevent="submitSearch"
    class="focus-within:shadow-2xl flex items-center shadow-lg rounded-xl overflow-hidden transition-default">
    <input type="text" placeholder="Search Term …" v-model.trim="query"
      class="py-3 pl-4 pr-1 w-full font-sans h-[50px] outline-none">
    <button
      class="flex items-center justify-center px-3 bg-white h-[50px] hover:bg-gray-100 active:bg-gray-200 hover:cursor-pointer transition-default">
      <img src="/icons/search.svg" class="select-none" style="user-drag: none" />
    </button>
  </form>
</template>

<script lang="ts" setup>
const searchStore = useSearchStore();

searchStore.query = '';
const query = ref(searchStore.query);

const submitSearch = () => {
  if (query.value == '') {
    return;
  }
  searchStore.query = query.value;
  navigateTo('/search/?s=' + encodeURIComponent(query.value));
}
</script>