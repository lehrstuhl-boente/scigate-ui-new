<template>
  <form @submit.prevent="submitSearch"
    class="focus-within:shadow-xl flex items-center shadow-lg rounded-xl overflow-hidden transition-default">
    <input type="text" placeholder="Search Term …" v-model.trim="searchTerm"
      class="py-3 pl-4 pr-1 w-full font-sans h-[50px] outline-none">
    <button
      class="flex items-center justify-center px-3 bg-white h-[50px] hover:bg-gray-100 active:bg-gray-200 hover:cursor-pointer transition-default">
      <span class="material-icons-outlined select-none">search</span>
    </button>
  </form>
</template>

<script lang="ts" setup>
const searchTerm = ref('');

const submitSearch = () => {
  if (searchTerm.value == '') {
    return;
  }
  navigateTo('/search/?s=' + encodeURIComponent(searchTerm.value));
}
</script>