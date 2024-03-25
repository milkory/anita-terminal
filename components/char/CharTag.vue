<script setup lang="ts">
defineProps<{
  icon: string;
  name: string;
  value?: number;
}>();
</script>

<template>
  <div class="tag">
    <img :src="icon" :alt="name" />
    <div class="tag-name">
      {{ name }}
      <span class="tag-value">{{ value }}</span>
    </div>
  </div>
</template>

<style scoped>
.tag {
}
</style>
