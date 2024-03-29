<script setup lang="ts">
defineProps<{
  name: string;
  src: string;
  alt: string;
}>();
</script>

<template>
  <span class="anita-icon icon-{{ name }}">
    <img :src="src" :alt="alt" class="anita-icon-img {{ imgClass }}" />
    <span class="anita-icon-text align-middle fw-bold ms-1"><slot></slot></span>
  </span>
</template>

<style>
.anita-icon-img {
  width: 1.5em;
  vertical-align: middle;
  margin-right: 0.1em;
}
</style>
