<script setup lang="ts">
import AnitaPanel from '~/components/common/AnitaPanel.vue';

const route = useRoute();

const id = route.params.id;
const { data } = await useFetch<Unit>(`/data/char/${id}.json`);

if (!data.value) {
  throw createError({
    statusCode: 404
  });
}

useHead({
  title: data.value.name
});
</script>

<template>
  <div v-if="data" class="row p-2">
    <div class="col-md-6">
      <CharView :views="data['views']" />
    </div>
    <AnitaPanel class="char-info col-md-6">
      <CharBasicInfo :data="data" />
      <BTabs class="mt-2" pills nav-class="mb-2">
        <BTab title="信息"><CharInfo :data="data" /></BTab>
        <BTab title="技能">TODO</BTab>
        <BTab title="共振">TODO</BTab>
        <BTab title="觉醒">TODO</BTab>
        <BTab title="档案">TODO</BTab>
        <BTab title="录音">TODO</BTab>
      </BTabs>
    </AnitaPanel>
  </div>
</template>

<style>
.char-info {
  position: relative;
  z-index: 100;
}

@media (max-width: 768px) {
  .char-info {
    margin-top: 15px;
    backdrop-filter: blur(1rem);
  }
}
</style>
