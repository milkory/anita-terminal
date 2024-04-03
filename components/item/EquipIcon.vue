<script setup lang="ts">
defineProps<{
  data: Equipment;
}>();
</script>

<template>
  <div class="equip-icon d-inline-block align-bottom">
    <img
      :src="`/img/icon/item/equip_type_${data.subType}.png`"
      :alt="equipTypeLocale(data.subType)"
    />
  </div>
</template>

<style>
.equip-icon img {
  width: 0.9em;
  height: 0.9em;
}
</style>
