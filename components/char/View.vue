<script setup lang="ts">
const props = defineProps<{
  width: string;
  views: UnitView[];
}>();

const current = ref(props.views[0]);
const showState2 = ref(false);

function changeTo(view: UnitView) {
  current.value = view;
  showState2.value = false;
}
</script>

<template>
  <div v-if="views.length > 0" class="char-view-root" :style="{ width: width }">
    <div v-for="view in views" v-show="current == view" :key="view.id">
      <div v-if="!showState2" class="char-view h-100">
        <img :src="`/img/res/${view.id}/full.webp`" class="char-view-image mt-1" :alt="view.name" />
      </div>
      <div v-else>
        <img
          :src="`/img/res/${view.id}/state2_full.webp`"
          class="char-view-image-2"
          :alt="view.name"
        />
      </div>
    </div>
    <BButtonGroup class="char-view-control">
      <BDropdown v-if="views.length > 1" dropup>
        <BDropdownItem v-for="view in views" :key="view.id" @click="changeTo(view)">
          {{ view.name }}
        </BDropdownItem>
      </BDropdown>
      <BButton v-model:pressed="showState2" :disabled="!current.hasState2">共振</BButton>
    </BButtonGroup>
  </div>
  <div class="char-view-block only-m"></div>
</template>

<style>
.char-view-root {
  position: fixed;
  height: calc(100vh - var(--anita-bottom-height));
}

.char-view {
  position: absolute;
  left: 50%;
  translate: -50%;
  text-align: center;
}

.char-view-image {
  height: 100%;
  width: auto;
}

.char-view-image-2 {
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
}

.char-view-control {
  position: absolute;
  bottom: 0;
}

.char-view-block {
  height: 512px;
}

@media (max-width: 768px) {
  .char-view-root {
    position: fixed;
    margin: 0 auto;
    width: 100% !important;
    height: 506px;
    left: 50%;
    translate: -50%;
  }

  .char-view-image {
    height: 500px;
  }

  .char-view-image-2 {
    position: initial;
    height: 20rem;
    margin-left: -50%;
    margin-top: -0.5rem;
  }
  .char-view-control {
    left: 1rem;
  }
}
</style>
