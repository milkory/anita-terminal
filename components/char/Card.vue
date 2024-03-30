<script setup lang="ts">
defineProps<{
  data: Skill;
  extra?: boolean;
}>();
</script>

<template>
  <div class="char-card d-flex bg-dark w-100 p-2 mb-2">
    <div class="char-card-img">
      <NuxtPicture :src="`/img/card/${data.card.cId}.png`" width="72px" />
    </div>
    <div class="char-card-info ms-2">
      <div class="char-card-name fw-bold text-warning">
        {{ data.name }}
        <BBadge v-if="extra" variant="warning" class="ms-1">衍生卡</BBadge>
      </div>
      <div class="char-card-desc fs-small .text-gray" v-html="data.desc"></div>
      <div class="char-card-desc-ex fs-small text-gray" v-html="data.detailDesc"></div>
    </div>
  </div>
  <div v-if="data.exSkills" class="char-card-ex">
    <Card v-for="skill in data.exSkills" :key="skill.id" :data="skill" extra />
  </div>
</template>
