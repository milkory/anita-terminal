<script setup lang="ts">
const props = defineProps<{
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
  <div class="char-view-root w-100">
    <div v-if="!showState2" class="view h-100">
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
</template>

<style>
.char-view-root {
  position: fixed;
  height: calc(100vh - var(--anita-bottom-height));
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

@media (max-width: 768px) {
  .char-view-root {
    position: sticky;
    margin: 0 auto;
    height: initial;
  }

  .char-view-image {
    width: 100%;
    height: auto;
  }

  .char-view-image-2 {
    position: initial;
    height: 20rem;
    margin-left: -50%;
    margin-top: -0.5rem;
  }
}
</style>
