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
  <div class="char-view-root" :style="{ width: width }">
    <div v-if="!showState2" class="char-view h-100">
      <NuxtPicture
        :src="`/img/char/${current.id}/full.png`"
        :img-attrs="{ class: 'char-view-image mt-1', alt: current.name }"
      />
    </div>
    <div v-else>
      <NuxtPicture
        :src="`/img/char/${current.id}/state2_full.png`"
        :img-attrs="{ class: 'char-view-image-2', alt: current.name }"
      />
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
  }

  .char-view {
    width: 100%;
    margin-left: -20px;
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
}
</style>
