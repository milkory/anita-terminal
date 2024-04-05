<script setup lang="ts">
const route = useRoute();

const { data: summary } = await useFetch<UnitSummary[]>('/api/char', {
  query: { type: 'summary' }
});

const doShowList = ref(false);

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
  if (route.name == 'char') {
    navigateTo(`/char/${getLastView('char') ?? 4}`);
  }
});
</script>

<template>
  <div>
    <NuxtPage @show-list="showList()" />
    <Transition>
      <div v-if="doShowList" class="char-list-cover h-screen fixed-top" @click="hideList()"></div>
    </Transition>
    <Transition name="char-list">
      <div v-if="doShowList && summary" class="char-list-wrapper container-xl fixed-top py-3">
        <CharList :data="summary" class="char-list" @exit="hideList()" />
      </div>
    </Transition>
  </div>
</template>
