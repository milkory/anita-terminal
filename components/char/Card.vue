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
      <div class="char-card-info ms-2">
        <div class="char-card-name fw-bold text-warning">
          {{ data.name }}
          <BBadge v-if="extra" variant="warning" class="ms-1">衍生卡</BBadge>
        </div>
        <div class="char-card-desc fs-small" v-html="data.desc"></div>
        <div class="char-card-desc-ex fs-small text-secondary" v-html="data.detailDesc"></div>
      </div>
    </div>
    <div class="char-card-tag">
      <div v-for="tag in data.card.tags" :key="tag.id" class="d-flex fs-small align-items-center">
        <NuxtPicture class="char-card-tag-img" :src="`/img/tag/${tag.cId}.png`" width="48" />
        <div class="ms-2 char-card-tag-detail">
          <span v-html="tag.name"></span>
          <span class="text-warning">：</span>
          <span v-html="tag.detail"></span>
        </div>
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
