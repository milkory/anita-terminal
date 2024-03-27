<script setup lang="ts">
import type { Unit, lineLocale, lineName } from '~/utils/unit';

defineProps<{
  data: Unit;
}>();
</script>

<template>
  <div class="unit-info mt-2 d-flex">
    <div class="unit-side d-flex align-items-center">
      <NuxtPicture
        :src="`/img/icon/char/camp_${data.side.sort}.png`"
        :img-attrs="{ class: 'img-fluid px-1 m-auto', alt: data.side.name }"
      />
    </div>
    <div class="ms-2">
      <div class="unit-name font-title fs-3 lh-1">
        {{ data.name }}
      </div>
      <div class="unit-name-en font-en fs-6">
        {{ data.nameEn }}
      </div>
      <div class="unit-rarity">
        <NuxtPicture
          :src="`/img/icon/common/rarity_${data.quality.toLowerCase()}.png`"
          :img-attrs="{ alt: data.quality }"
        />
      </div>
      <div class="unit-line">
        <NuxtPicture
          :src="`/img/icon/char/line_${lineName(data)}.png`"
          :img-attrs="{ alt: lineLocale(data) }"
        />
        <span>{{ lineLocale(data) }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.unit-side {
  height: 5rem;
  width: 4.8rem;
}

.unit-name-en {
  color: var(--bs-gray-500);
}

.unit-rarity {
  display: inline-block;
  width: 4.5rem;
  img {
    height: 2rem;
  }
}

.unit-line {
  display: inline-block;
  img {
    height: 2em;
  }
  span {
    margin-left: 0.1em;
    vertical-align: -0.1em;
  }
}
</style>
