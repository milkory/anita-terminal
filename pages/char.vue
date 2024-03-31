<script setup lang="ts">
definePageMeta({
  middleware: [
    function (to) {
      if (to.path == '/char' || to.path == '/char/') {
        return navigateTo('/char/4');
      }
    }
  ]
});
</script>

<template>
  <NuxtPage />
</template>
