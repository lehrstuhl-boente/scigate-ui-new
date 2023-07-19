<template>
  <div class="min-h-screen flex flex-col">
    <div class="sticky top-0 shadow-lg shadow-gray-50 bg-gray-50">
      <div class="container mx-auto">
        <SearchHeader />
      </div>
    </div>
    <div class="h-10"></div>
    <div class="container mx-auto">
      <slot />
    </div>
    <div class="h-10"></div>
    <MainFooter class="mt-auto" />
  </div>
</template>