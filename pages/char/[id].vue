<script setup lang="ts">
defineEmits(['show-list']);

const route = useRoute();

const id = parseInt(route.params.id.toString());
const { data } = await useFetch<Unit>('/api/char', {
  query: { id: id < 10000000 ? id + 10000000 : id }
});

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Not Found'
  });
}

useHead({
  title: data.value.name
});

onMounted(() => {
  setLastView('char', id.toString());
});
</script>

<template>
  <div v-if="data" class="row p-2">
    <div class="col-md-6">
      <BButtonGroup class="char-list-btn">
        <BButton @click="$emit('show-list')">
          <Icon class="char-list-icon fs-5" name="material-symbols:format-list-bulleted-rounded" />
          角色列表
        </BButton>
      </BButtonGroup>
      <CharView width="652px" :views="data['views']" />
    </div>
    <AnitaPanel class="rs-char col-md-6">
      <CharBasicInfo :data="data" />
      <BTabs class="mt-2" pills nav-class="mb-2">
        <BTab title="信息"><CharInfo :data="data" /></BTab>
        <BTab title="技能"><CharSkill :data="data" /></BTab>
        <BTab title="共振"><CharTalent :data="data.talents" type="talent" /></BTab>
        <BTab title="觉醒"><CharTalent :data="data.breakthroughs" type="breakthrough" /></BTab>
        <BTab title="档案"><CharFile :data="data" /></BTab>
        <BTab title="语音"><CharVoice :data="data" /></BTab>
      </BTabs>
    </AnitaPanel>
  </div>
</template>

<style>
.rs-char {
  position: relative;
  z-index: 100;
}

.char-list-cover {
  background: #00000090;
}

.char-list-wrapper {
  height: calc(100dvh - var(--anita-bottom-height));
  max-width: 1300px;
  z-index: 3000;
}

.char-list-btn {
  position: fixed;
  top: 4rem;
  z-index: 90;
}

@media (max-width: 768px) {
  .rs-char {
    margin-top: 15px;
  }
}

.char-list-enter-active,
.char-list-leave-active {
  transition-duration: 0.3s;
  .char-list {
    transition: all 0.3s ease-out;
  }
}

.char-list-enter-from,
.char-list-leave-to {
  .char-list {
    opacity: 0;
    margin-top: -10rem !important;
  }
}
</style>
