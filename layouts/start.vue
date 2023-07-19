<template>
  <div class="overflow-hidden relative">
    <img src="/pattern.svg" alt="patter"
      class="absolute right-0 float-right translate-y-[-100px] translate-x-[40px] user-select-none"
      style="user-drag: none;">
    <slot />
    <div class="h-12"></div>
    <MainFooter />
  </div>
</template>