<script setup lang="ts">
const route = useRoute();

onMounted(() => {
  if (route.name == 'char') {
    navigateTo(`/char/${getLastView('char') ?? 4}`);
  }
});
</script>

<template>
  <NuxtPage />
</template>
