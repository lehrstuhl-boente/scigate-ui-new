<template>
  <div class="flex items-center">
    <label class="mr-3">
      <span class="mr-2">{{ $t('from') }}:</span>
      <input type="number" v-model="from" placeholder="1990" class="py-1 px-2 max-w-[80px] rounded-md border">
    </label>
    <label>
      <span class="mr-2">{{ $t('to') }}:</span>
      <input type="number" v-model="to" placeholder="2000" class="py-1 px-2 max-w-[80px] rounded-md border">
    </label>
  </div>
</template>

<script lang="ts" setup>
const { filter } = defineProps<{ filter: FilterDate }>();

const filterStore = useFilterStore();

const from = ref(localStorage.getItem('filter.date.from'));
const to = ref(localStorage.getItem('filter.date.to'));

// save state of the two number fields to localstorage in order to preserve it after page refresh
watch(from, (newValue, oldValue) => {
  if (newValue != null) localStorage.setItem('filter.date.from', newValue);
});
watch(to, (newValue, oldValue) => {
  if (newValue != null) localStorage.setItem('filter.date.to', newValue);
});


/* const storeFilter = getObject<FilterDate>((filterStore.filters as FilterDate[]), { id: filter.id });

console.log(storeFilter) */
</script>