<script setup lang="ts">
defineProps<{
  data: Unit;
}>();
</script>

<template>
  <div class="rs-char-file">
    <BCard variant="dark" class="char-profile mt-2" body-class="d-flex flex-wrap">
      <CharProfileItem name="生日" :value="data.birthday" />
      <CharProfileItem name="性别" :value="data.gender" />
      <CharProfileItem name="身高" :value="data.height" />
      <CharProfileItem name="出身地" :value="data.birthplace" />
      <CharProfileItem name="现身份" :value="data.identity" />
      <CharProfileItem name="升构能力" :value="data.ability" />
    </BCard>
    <BCard variant="dark" class="main-text mt-2">
      <p v-for="(resume, i) in data.resume" :key="i" v-html="resume.des"></p>
    </BCard>
    <template v-if="data.files.length > 0">
      <BCard
        v-for="(story, i) in data.files[0].stories"
        :key="story.title"
        variant="dark"
        class="char-story main-text mt-2 py-0"
      >
        <template #header>
          <div v-b-toggle="`char-story-${i}`" class="char-story-title fw-bold mb-0">
            {{ story.title }}
            <BBadge variant="light" class="ms-2">默契 LV {{ story.unlockLevel }}</BBadge>
            <div class="d-inline-block float-end h-100">
              <Icon name="fe:drop-down" class="fs-5" />
            </div>
          </div>
        </template>
        <BCollapse :id="`char-story-${i}`">
          <div class="char-story-content" v-html="story.desc"></div>
        </BCollapse>
      </BCard>
    </template>
  </div>
</template>

<style lang="scss">
.char-story-title {
  cursor: pointer;
  padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);
}

.char-story-content {
  padding: 1rem;
}

.char-story {
  .card-header {
    border-radius: 0;
    padding: 0;
  }
  .card-body {
    padding: 0;
  }
}
</style>
