<script setup lang="ts">
defineProps<{
  data: Skill;
  extra?: boolean;
}>();
</script>

<template>
  <BCard variant="dark" class="char-card w-100 mt-2">
    <div class="char-card-detail d-flex">
      <div class="char-card-img h-100 border border-secondary">
        <NuxtPicture :src="`/img/card/${data.card.cId}.png`" width="72px" />
      </div>
      <div class="char-card-info ms-2 w-100">
        <div class="char-card-name fw-bold text-warning">
          {{ data.name }}
          <div class="char-card-attr d-inline-block float-end">
            <BBadge v-if="extra" variant="warning" class="ms-1">衍生卡</BBadge>
            <BBadge v-if="data.num" variant="light" class="ms-1">{{ data.num }}张</BBadge>
            <BBadge variant="light" class="ms-1">COST {{ data.card.cost }}</BBadge>
          </div>
        </div>
        <div class="char-card-desc fs-small" v-html="data.desc"></div>
        <div class="char-card-desc-ex fs-small text-secondary" v-html="data.detailDesc"></div>
      </div>
    </div>
  </BCard>
  <div v-if="data.exSkills" class="char-card-ex">
    <Card v-for="skill in data.exSkills" :key="skill.id" :data="skill" extra />
  </div>
</template>

<style>
.char-card-img {
  padding: 1px;
}

.char-card-tag-img {
  height: 2.5em;
  img {
    max-height: 100%;
    width: auto;
  }
}
</style>
