<template>
  <div class="flex items-center">
    <img src="/icons/language.svg" class="mr-[-30px] z-10 pointer-events-none" />
    <select
      class="pl-9 p-2 appearance-none rounded-md z-0 bg-transparent hover:cursor-pointer hover:bg-black/10 transition-default uppercase"
      v-model="selected">
      <option v-for="localeValue in availableLocales" :value="localeValue">{{ localeValue }}</option>
    </select>
  </div>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n();

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value);
});



const selected = ref(locale.value);
watch(selected, (newValue) => {
  setLocale(newValue);
});
</script>