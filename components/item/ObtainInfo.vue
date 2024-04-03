<script setup lang="ts">
defineProps<{
  data: Item;
}>();
</script>

<template>
  <BCard variant="dark" class="mx-out-1">
    <div class="fw-bold text-secondary ms-1">获取途径</div>
    <ul class="ms-1 mt-1 mb-0 fs-small">
      <li v-for="(obtain, i) in data.obtain" :key="i" v-html="obtain"></li>
    </ul>
  </BCard>
</template>

<style>
.item-rarity {
  display: inline-block;
  width: 4.5rem;
  img {
    height: 2rem;
  }
}

.item-img {
  max-width: 10rem;
}
</style>
