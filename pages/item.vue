<script setup lang="ts">
const route = useRoute();

const { data: summary } = await useFetch<ItemSummaryList>('/api/item', {
  query: { type: 'summary' }
});

onMounted(() => {
  if (route.name == 'item') {
    navigateTo(`/item/${getLastView('item') ?? 11800028}`);
  }
});
</script>

<template>
  <div>
    <div class="row p-2">
      <div v-if="summary" class="col-md-6">
        <AnitaPanel class="item-list-wrapper h-afull">
          <ItemList :data="summary" />
        </AnitaPanel>
      </div>
      <NuxtPage />
    </div>
  </div>
</template>

<style>
@media (max-width: 768px) {
  .item-list-wrapper {
    max-height: 480px;
  }
}
</style>
