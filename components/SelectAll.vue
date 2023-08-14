<template>
  <button class="mx-1 rounded-md text-xs mb-2 hover:opacity-70 active:opacity-50" @click="setAllOptions(true)"
    v-if="!allOptionsChecked">
    {{ $t('selectAll') }}
  </button>
  <button class="mx-1 rounded-md text-xs mb-2 hover:opacity-70 active:opacity-50" @click="setAllOptions(false)" v-else>
    {{ $t('deselectAll') }}
  </button>
</template>

<script lang="ts" setup>
const { options } = defineProps<{ options: Option[] | StoreEngine[] }>();

const allOptionsChecked = ref(true);

const checkIfAllOptionsChecked = (options: Option[] | StoreEngine[]) => {
  for (const option of options) {
    if (!option.checked) {
      allOptionsChecked.value = false;
      return;
    }
  }
  allOptionsChecked.value = true;
}
checkIfAllOptionsChecked(options); // on reload

watch(options, (newOptions, oldOptions) => {  // on checkbox change
  checkIfAllOptionsChecked(newOptions);
});

const setAllOptions = (value: boolean) => {
  for (const option of options) {
    option.checked = value;
  }
}
</script>