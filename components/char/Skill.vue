<script setup lang="ts">
const props = defineProps<{
  data: Unit;
}>();

const tags = getAllTag(props.data.skills);
</script>

<template>
  <div class="char-skill-list">
    <BCard v-if="tags.length > 0" variant="dark" class="char-skill-tag">
      <div
        v-for="tag in getAllTag(data.skills)"
        :key="tag.id"
        class="d-flex fs-small align-items-center"
      >
        <div class="char-card-tag-img">
          <img :src="`/img/res/${tag.cId}.webp`" :alt="tag.name" width="48" />
        </div>
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
