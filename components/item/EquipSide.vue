<script setup lang="ts">
defineProps<{
  data: Equipment;
}>();
</script>

<template>
  <div class="equip-side d-inline-block align-middle fw-bold text-secondary">
    {{ equipSideName(data.side) }}
  </div>
</template>

<style></style>
