<template>
  <header class="py-5">
    <div class="flex justify-between flex-wrap md:flex-nowrap items-center">
      <NuxtLink to="/">
        <img src="/logo.svg" alt="Scigate Logo" class="w-[100px]">
      </NuxtLink>
      <SearchForm class="flex-1 mx-12 hidden md:flex" />
      <LanguageSwitcher class="mt-1" />
    </div>
    <SearchForm class="flex-1 md:hidden mx-0 max-w-full mt-6" />
  </header>
</template>