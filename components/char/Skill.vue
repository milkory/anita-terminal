<script setup lang="ts">
defineProps<{
  data: Unit;
}>();
</script>

<template>
  <div class="char-skill-list">
    <div v-for="skill in data.skills" :key="skill.id">
      <CharCard :data="skill" />
    </div>
  </div>
</template>
