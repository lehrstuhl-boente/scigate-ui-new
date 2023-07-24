<template>
  <header class="py-5">
    <div class="md:flex justify-between md:items-center grid grid-cols-2 md:gap-12">
      <NuxtLink to="/" class="active:scale-95 order-1">
        <img src="/logo.svg" alt="Scigate Logo" class="w-[100px]">
      </NuxtLink>
      <SearchForm class="md:flex-1 md:order-2 order-3 md:mt-0 mt-4 col-span-2" />
      <LanguageSwitcher class="mt-1 md:order-3 order-2 justify-self-end" />
    </div>
  </header>
</template>