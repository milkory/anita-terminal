<script setup lang="ts">
defineProps<{
  data: EquipSummary;
}>();
</script>

<template>
  <div class="equip-list-tag">
    <img
      :src="`/img/icon/item/equip_type_${data.subType}.png`"
      :alt="equipTypeLocale(data.subType)"
    />
  </div>
</template>

<style lang="scss">
.equip-list-tag {
  width: 2.4rem;
  height: 2.4rem;
  border: 1.2rem solid;
  border-color: #000000c0 transparent transparent #000000c0;
  img {
    width: 1rem;
    height: 1rem;
    margin-top: -2.6rem;
    margin-left: -1rem;
  }
}

.router-link-active {
  .equip-list-tag {
    border-color: #eee transparent transparent #eee;
    img {
      filter: invert(1);
    }
  }
}

@media (max-width: 768px) {
  .equip-list-tag {
    width: 1.8rem;
    height: 1.8rem;
    border: 0.9rem solid;
    border-color: #111 transparent transparent #111;
    img {
      width: 0.7rem;
      height: 0.7rem;
      margin-top: -2.5rem;
      margin-left: -0.7rem;
    }
  }
}
</style>
