<script setup lang="ts">
onMounted(() => {
  navigateTo(getLastView('.') ?? '/home');
});
</script>

<template>
  <div class="rs-index h-full fixed-top d-flex align-items-center justify-content-around">
    <div>
      <AnitaLoading />
    </div>
  </div>
</template>
