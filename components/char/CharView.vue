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
  <div class="view-root w-100">
    <div v-if="!showState2" class="view h-100">
      <img :src="`/img/char/${current.id}/full.png`" class="view-image mt-1" :alt="current.name" />
    </div>
    <div v-else>
      <img
        :src="`/img/char/${current.id}/state2_full.png`"
        class="view-image-2"
        :alt="current.name"
      />
    </div>
    <BButtonGroup class="view-control">
      <BDropdown v-if="views.length > 1" dropup>
        <BDropdownItem v-for="view in views" :key="view.id" @click="changeTo(view)">
          {{ view.name }}
        </BDropdownItem>
      </BDropdown>
      <BButton v-model:pressed="showState2" :disabled="!current.hasState2">共振</BButton>
    </BButtonGroup>
  </div>
</template>

<style scoped>
.view-root {
  position: fixed;
  height: calc(100vh - var(--anita-bottom-height));
}

.view-image {
  height: 100%;
  width: auto;
}

.view-image-2 {
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
}

.view-control {
  position: absolute;
  bottom: 0;
}

@media (max-width: 768px) {
  .view-root {
    position: sticky;
    margin: 0 auto;
    height: initial;
  }

  .view-image {
    width: 100%;
    height: auto;
  }

  .view-image-2 {
    position: initial;
    height: 20rem;
    margin-left: -50%;
    margin-top: -0.5rem;
  }
}
</style>
