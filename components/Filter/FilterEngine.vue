<template>
  <div class="mb-5">
    <h3>{{ $t('engines') }}</h3>
    <div class="mt-2">
      <CheckboxEngine v-for="engine in searchStore.engines " :engine="engine" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const searchStore = useSearchStore();
</script>