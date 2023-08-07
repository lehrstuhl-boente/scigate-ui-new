<template>
  <form @submit.prevent="submitSearch"
    class="focus-within:shadow-lg flex items-center shadow-md rounded-xl overflow-hidden transition-default md:max-w-xl">
    <input type="text" placeholder="Search Term …" v-model.trim="query"
      class="py-2 pl-4 pr-1 w-full font-sans h-[45px] outline-none text-sm">
    <button
      class="flex items-center justify-center px-3 bg-white h-[45px] hover:bg-gray-100 active:bg-gray-200 hover:cursor-pointer transition-default">
      <span class="material-icons-outlined select-none">search</span>
    </button>
  </form>
</template>

<script lang="ts" setup>
const route = useRoute();
const searchStore = useSearchStore();

searchStore.query = route.query['s']?.toString() || searchStore.query;
const query = ref(searchStore.query);

const submitSearch = () => {
  if (query.value == '') return;
  searchStore.query = query.value;
  searchStore.status = 'newSearch';
}
</script>