<script setup lang="ts">
import type { Item } from '~/utils/item';

const route = useRoute();

const id = parseInt(route.params.id.toString());
const { data } = await useFetch<Item>('/api/item', {
  query: { id: id }
});
const { data: summary } = await useFetch<ItemSummaryList>('/api/item', {
  query: { type: 'summary' }
});

if (!data.value || !summary.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Not Found'
  });
}

useHead({
  title: data.value.name
});

onMounted(() => {
  document.body.style.overflow = '';
  setLastView('item', id.toString());
});
</script>

<template>
  <div>
    <div class="row p-2">
      <div v-if="summary" class="col-md-6">
        <AnitaPanel class="h-afull">
          <ItemList :data="summary" />
        </AnitaPanel>
      </div>
      <div v-if="data" class="col-md-6 mt-3 mt-md-0">
        <AnitaPanel>
          <ItemBasicInfo :data="data" />
          <ItemEquipInfo v-if="data.type == 'equip'" :data="data as Equipment" class="mt-2" />
          <ItemObtainInfo v-if="data.obtain.length > 0" :data="data as Equipment" class="mt-2" />
        </AnitaPanel>
      </div>
    </div>
  </div>
</template>

<style></style>
