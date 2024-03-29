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
  </div>
</template>
