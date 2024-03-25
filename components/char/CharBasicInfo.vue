<script setup lang="ts">
import type { Unit, lineLocale, lineName } from '~/utils/unit';

defineProps<{
  data: Unit;
}>();
</script>

<template>
  <div class="row">
    <div class="col-3">
      <img
        class="side img-fluid px-1"
        :src="`/img/icon/char/camp_${data.side.sort}.png`"
        :alt="data.side.name"
      />
    </div>
    <div class="col-9">
      <div class="unit-name font-title fs-3 lh-1">
        {{ data.name }}
      </div>
      <div class="unit-name-en font-en fs-6">
        {{ data.nameEn }}
      </div>
      <div class="unit-rarity">
        <img
          :src="`/img/icon/common/rarity_${data.quality.toLowerCase()}.png`"
          :alt="data.quality"
        />
      </div>
      <div class="unit-line">
        <img :src="`/img/icon/char/line_${lineName(data)}.png`" :alt="lineLocale(data)" />
        <span>{{ lineLocale(data) }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.unit-name-en {
  color: var(--anita-color-note);
}

.unit-rarity {
  display: inline-block;
  width: 4.5em;
  img {
    height: 2em;
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
