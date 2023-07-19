<template>
  <ContentRenderer :value="content">
    <template #empty>
      No content for this language.
    </template>
  </ContentRenderer>
</template>

<script setup>
const { locale } = useI18n();

const content = undefined;
try {
  content = await queryContent(`/${locale.value}/about`).findOne();
} catch (e) {
}
</script>