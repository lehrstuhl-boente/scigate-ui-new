<template>
  <div class="container mx-auto px-4 mb-12">
    <div class="flex flex-col min-h-screen">
      <MainHeader />
      <div class="flex-1 flex items-center justify-center max-w-5xl w-full text-center mx-auto">
        <div>
          <h1 class="text-3xl text-center max-w-3xl">
            {{ $t('headline') }}
          </h1>
          <SearchFormBig class="mt-10" />
        </div>
      </div>
      <div class="flex justify-center mb-7">
        <a @click="scrollTo"
          class="flex items-center py-2 pl-3 pr-1 rounded-md hover:cursor-pointer hover:bg-gray-200 active:bg-gray-300">
          {{ $t('learnMore') }}
          <span class="material-icons-outlined ml-1">expand_more</span>
        </a>
      </div>
    </div>
    <div ref="learnMoreContainer" class="pt-5">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl text-center my-5">{{ $t('searchEngines') }}</h2>
        <p class="max-w-3xl text-black/30 text-center mx-auto">{{ $t('searchEnginesText') }}</p>
        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <EngineCard v-for="engine in engines" :engine="engine" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const learnMoreContainer = ref();

const { body: engines } = await queryContent('engines').findOne();

const scrollTo = () => {
  learnMoreContainer.value.scrollIntoView({ behavior: 'smooth' });
}

definePageMeta({
  layout: 'start'
})
</script>

<style scoped></style>