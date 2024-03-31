<script setup lang="ts">
defineProps<{
  data: Unit;
}>();
</script>

<template>
  <div class="rs-char-file">
    <BCard variant="dark" class="mt-2">
      <div>生日：{{ data.birthday }}</div>
      <div>性别：{{ data.gender }}</div>
      <div>身高：{{ data.height }}</div>
      <div>出身地：{{ data.birthplace }}</div>
      <div>现身份：{{ data.identity }}</div>
      <div>升构能力：{{ data.ability }}</div>
    </BCard>
    <BCard variant="dark" class="main-text mt-2">
      <p v-for="(resume, i) in data.resume" :key="i">{{ resume.des }}</p>
    </BCard>
    <BCard
      v-for="(story, i) in data.files[0].stories"
      :key="i"
      variant="dark"
      class="char-story main-text mt-2 py-0"
    >
      <template #header>
        <div v-b-toggle="`char-story-${i}`" class="char-story-title fw-bold mb-0">
          {{ story.title }}
          <BBadge variant="light" class="ms-2">默契等级 LV {{ story.unlockLevel }} 解锁</BBadge>
          <div class="d-inline-block float-end h-100">
            <Icon name="fe:drop-down" class="fs-5" />
          </div>
        </div>
      </template>
      <BCollapse :id="`char-story-${i}`">
        <div class="char-story-content" v-html="story.desc"></div>
      </BCollapse>
    </BCard>
  </div>
</template>

<style>
.char-story-title {
  cursor: pointer;
}

.char-story-content {
  padding: 1rem;
}

.char-story .card-header {
  border-radius: 0;
}

.char-story .card-body {
  padding: 0;
}
</style>
