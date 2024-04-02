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
        <img :src="`/img/res/${data.card.cId}.webp`" :alt="data.card.name" width="72" />
      </div>
      <div class="char-card-info ms-2 w-100">
        <div class="char-card-name fw-bold text-warning">
          {{ data.name }}
          <div class="char-card-attr d-inline-block float-end">
            <BBadge v-if="extra" variant="warning" class="ms-1">
              <span class="only-pc">衍生卡</span>
              <span class="only-m">衍</span>
            </BBadge>
            <BBadge v-else-if="data.leaderCond" variant="danger" class="ms-1">
              <span class="only-pc">得意技</span>
              <span class="only-m">得意</span>
            </BBadge>
            <BBadge v-else-if="data.num" variant="light" class="ms-1">{{ data.num }}张</BBadge>
            <BBadge variant="light" class="ms-1">
              <span class="only-pc">COST</span>
              <span class="only-m">CC</span>
              {{ data.card.cost }}
            </BBadge>
          </div>
        </div>
        <div v-if="data.leaderCond" class="fs-small text-danger">
          队长技条件：
          <span v-html="data.leaderCond"></span>
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
.char-card-attr {
  margin-top: -0.1em;
}

.char-card-img {
  padding: 1px;
}
</style>
