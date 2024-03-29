<script setup lang="ts">
defineProps<{
  name: string;
  src: string;
  alt: string;
}>();
</script>

<template>
  <span :class="['anita-icon', `icon-${name}`, 'd-inline-block']">
    <img :src="src" :alt="alt" class="anita-icon-img align-sub me-1" />
    <span class="anita-icon-text fw-bold align-middle"><slot></slot></span>
  </span>
</template>

<style>
.anita-icon-img {
  height: 1.5em;
  vertical-align: middle;
  margin-right: 0.1em;
}

.anita-icon-text {
  line-height: 1.5em;
}
</style>
