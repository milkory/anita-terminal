<script setup lang="ts">
defineProps<{
  name: string;
  value: string;
}>();
</script>

<template>
  <div class="char-profile-item col-md-6 col-12">
    <span class="text-secondary fw-bold ms-2">{{ name }}</span>
    <span class="float-end me-2">{{ value }}</span>
  </div>
</template>
