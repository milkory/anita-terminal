<script setup lang="ts">
const route = useRoute();

const id = parseInt(route.params.id.toString());
const { data } = await useFetch<Unit>('/api/char', {
  query: { id: id < 10000000 ? id + 10000000 : id }
});
const { data: summary } = await useFetch('/api/char', {
  query: { type: 'summary' }
});

const doShowList = ref(false);

if (!data.value || !summary.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Not Found'
  });
}

useHead({
  title: data.value.name
});

function showList() {
  doShowList.value = true;
  document.body.style.overflow = 'clip';
}

function hideList() {
  doShowList.value = false;
  document.body.style.overflow = '';
}

onMounted(() => {
  document.body.style.overflow = '';
});
</script>

<template>
  <div>
    <div v-if="data" class="row p-2">
      <div class="col-md-6">
        <BButtonGroup class="char-list-btn">
          <BButton @click="showList()">
            <Icon
              class="char-list-icon fs-5"
              name="material-symbols:format-list-bulleted-rounded"
            />
            角色列表
          </BButton>
        </BButtonGroup>
        <CharView width="652px" :views="data['views']" />
      </div>
      <AnitaPanel class="rs-char col-md-6">
        <CharBasicInfo :data="data" />
        <BTabs class="mt-2" pills nav-class="mb-2">
          <BTab title="信息"><CharInfo :data="data" /></BTab>
          <BTab title="技能">TODO</BTab>
          <BTab title="共振">TODO</BTab>
          <BTab title="觉醒">TODO</BTab>
          <BTab title="档案"><CharFile :data="data" /></BTab>
          <BTab title="录音">TODO</BTab>
        </BTabs>
      </AnitaPanel>
    </div>
    <Transition>
      <div v-if="doShowList" class="char-list-cover h-screen fixed-top" @click="hideList()"></div>
    </Transition>
    <Transition name="char-list">
      <div v-if="doShowList" class="char-list-wrapper container-xl fixed-top py-3">
        <CharList :data="summary as UnitSummary[]" class="char-list" @exit="hideList()" />
      </div>
    </Transition>
  </div>
</template>

<style>
.rs-char {
  position: relative;
  z-index: 100;
  backdrop-filter: blur(1rem);
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
