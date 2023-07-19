<template>
  <div class="container mx-auto">
    <div class="max-w-3xl mx-auto">
      <ContentRenderer :value="content" class="markdown">
        <template #empty>
          No content for this language.
        </template>
      </ContentRenderer>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();

const content = ref();
try {
  content.value = await queryContent(`/${locale.value}/privacy`).findOne();
} catch (e) {
  console.error(e);
}
</script>