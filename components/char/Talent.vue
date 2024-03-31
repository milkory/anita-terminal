<script setup lang="ts">
defineProps<{
  data: UnitTalent[];
  type: 'talent' | 'breakthrough';
}>();
</script>

<template>
  <div :class="`char-${type}-list`">
    <BCard
      v-for="(talent, i) in data"
      :key="talent.id"
      variant="dark"
      class="char-talent w-100 mt-2"
    >
      <div class="char-talent-detail d-flex">
        <div class="char-talent-img h-100 border border-secondary">
          <img :src="`/img/${type}/${talent.cId}.webp`" :alt="talent.name" width="72px" />
        </div>
        <div class="char-talent-info ms-2 w-100">
          <div class="char-talent-name fw-bold text-warning">
            {{ talent.name }}
            <div class="char-talent-attr d-inline-block float-end">
              <BBadge
                :variant="type == 'talent' ? (i == 4 ? 'warning' : 'danger') : 'light'"
                class="ms-1"
              >
                {{ type == 'talent' ? '共振' : '觉醒' }} {{ i + 1 }}
              </BBadge>
            </div>
          </div>
          <div class="char-talent-desc fs-small" v-html="talent.desc"></div>
        </div>
      </div>
    </BCard>
  </div>
</template>

<style lang="scss">
.char-breakthrough-list,
.char-talent-list .char-talent:nth-child(5) {
  .char-talent-img {
    border-radius: 50%;
  }
}
</style>
