<template>
  <div class="min-h-screen flex flex-col">
    <div class="container mx-auto">
      <MainHeader />
    </div>
    <div class="h-10"></div>
    <slot />
    <div class="h-10"></div>
    <MainFooter class="mt-auto" />
  </div>
</template>