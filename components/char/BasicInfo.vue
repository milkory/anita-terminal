<script setup lang="ts">
defineProps<{
  data: Unit;
}>();
</script>

<template>
  <div class="char-basic-info mt-2 d-flex">
    <div class="char-side d-flex align-items-center">
      <img
        :src="`/img/icon/char/camp_${data.side}.png`"
        class="img-fluid px-1 m-auto"
        :alt="sideLocale(data.side)"
      />
    </div>
    <div class="ms-2">
      <div class="char-name font-title fs-3 lh-1">
        {{ data.name }}
      </div>
      <div class="char-name-en font-en fs-6">
        {{ data.nameEn }}
      </div>
      <div class="char-rarity">
        <img :src="`/img/icon/common/rarity_${data.quality}.png`" :alt="data.quality" />
      </div>
      <div class="char-line">
        <img :src="`/img/icon/char/line_${lineName(data.line)}.png`" :alt="lineLocale(data.line)" />
        <span>{{ lineLocale(data.line) }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.char-side {
  height: 5rem;
  width: 4.8rem;
}

.char-name-en {
  color: var(--bs-gray-500);
}

.char-rarity {
  display: inline-block;
  width: 4.5rem;
  img {
    height: 2rem;
  }
}

.char-line {
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
