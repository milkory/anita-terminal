<script setup lang="ts">
definePageMeta({
  middleware: [
    function (to) {
      if (to.path == '/char') {
        return navigateTo('/char/10000739');
      }
    }
  ]
});
</script>

<template>
  <NuxtPage />
</template>
