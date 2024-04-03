<script setup lang="ts">
import type { Equipment } from '~/utils/item';

defineProps<{
  data: Item;
}>();
</script>

<template>
  <div class="item-basic-info mt-2 row justify-content-around">
    <div class="item-img d-flex align-items-center col-md-3 mb-2 mb-md-0">
      <img :src="`/img/res/${data.cId}.webp`" class="img-fluid px-1 m-auto" :alt="data.name" />
    </div>
    <div class="col-md-9">
      <div class="item-rarity">
        <img :src="`/img/icon/common/rarity_${data.quality}.png`" :alt="data.quality" />
      </div>
      <ItemEquipSide v-if="data.type == 'equip'" :data="data as Equipment" />
      <div class="item-name font-title fs-3 lh-1">
        <ItemEquipIcon v-if="data.type == 'equip'" :data="data as Equipment" />
        {{ data.name }}
      </div>
      <div class="item-desc mt-2 fs-small text-secondary" v-html="data.desc"></div>
    </div>
  </div>
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
