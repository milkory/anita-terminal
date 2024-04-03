<script setup lang="ts">
const route = useRoute();

onMounted(() => {
  if (route.name == 'item') {
    navigateTo(`/item/${getLastView('item') ?? 11800001}`);
  }
});
</script>

<template>
  <NuxtPage />
</template>
