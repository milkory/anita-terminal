<script setup lang="ts">
defineProps<{
  data: Unit;
}>();
</script>

<template>
  <div class="char-skill-list">
    <BCard variant="dark" class="char-skill-tag">
      <div
        v-for="tag in getAllTag(data.skills)"
        :key="tag.id"
        class="d-flex fs-small align-items-center"
      >
        <NuxtPicture class="char-card-tag-img" :src="`/img/tag/${tag.cId}.png`" width="48" />
        <div class="ms-2 char-card-tag-detail">
          <span v-html="tag.name"></span>
          <span class="text-warning">：</span>
          <span v-html="tag.detail"></span>
        </div>
      </div>
    </BCard>
    <div v-for="skill in data.skills" :key="skill.id">
      <CharCard :data="skill" />
    </div>
  </div>
</template>

<style>
.char-card-tag-img {
  height: 3em;
  padding: 0.25em;
  img {
    max-height: 100%;
    width: auto;
  }
}
</style>
