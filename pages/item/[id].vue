<script setup lang="ts">
import type { Item } from '~/utils/item';

const route = useRoute();

const id = parseInt(route.params.id.toString());
const { data } = await useFetch<Item>('/api/item', {
  query: { id: id }
});

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Not Found'
  });
}

useHead({
  title: data.value.name
});

onMounted(() => {
  const wrapperY = document.getElementById('item-info-wrapper')?.getBoundingClientRect().top ?? 0;
  scrollTo({ top: window.scrollY + wrapperY - 60 });
  setLastView('item', id.toString());
});
</script>

<template>
  <div v-if="data" class="col-md-6 mt-3 mt-md-0 mb-5 mb-md-0">
    <AnitaPanel id="item-info-wrapper">
      <ItemBasicInfo :data="data" />
      <ItemEquipInfo v-if="data.type == 'equip'" :data="data as Equipment" class="mt-2" />
      <ItemObtainInfo v-if="data.obtain.length > 0" :data="data as Equipment" class="mt-2" />
    </AnitaPanel>
  </div>
</template>
