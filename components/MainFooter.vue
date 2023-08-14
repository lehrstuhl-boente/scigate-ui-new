<template>
  <footer class="bg-zinc-800 mt-2">
    <div class="flex justify-between md:flex-row flex-col container mx-auto py-5 text-xs container mx-auto">
      <div class="text-white uppercase md:mb-0 mb-3 hidden md:block">A running prototype</div>
      <div class="text-white uppercase">
        <NuxtLink to="/" class="hover:underline">Home</NuxtLink> |
        <NuxtLink to="/about" class="hover:underline">About</NuxtLink> |
        <NuxtLink to="/imprint" class="hover:underline">{{ $t('imprint') }}</NuxtLink> |
        <NuxtLink to="/privacy" class="hover:underline">{{ $t('privacy') }}</NuxtLink> |
        <NuxtLink to="http://v2202109132150164038.luckysrv.de/" class="hover:underline" target="_blank">
          API Docs
        </NuxtLink> |
        <NuxtLink to="http://v2202109132150164038.luckysrv.de/api/ui" class="hover:underline" target="_blank">
          API
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>