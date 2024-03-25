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
  <div class="view-root">
    <div class="view">
      <img :src="`/img/char/${current.id}/full.png`" class="view-image" :alt="current.name" />
    </div>
    <BButtonGroup class="view-control">
      <BDropdown v-if="views.length > 1" dropup>
        <BDropdownItem v-for="view in views" :key="view.id" @click="changeTo(view)">
          {{ view.name }}
        </BDropdownItem>
      </BDropdown>
      <BButton :disabled="!current.hasState2" @click="showState2 = true">共振</BButton>
    </BButtonGroup>
  </div>
</template>

<style scoped>
.view-root {
  position: fixed;
}

.view {
  height: calc(100vh - var(--anita-bottom-height));
}

.view-image {
  height: 100%;
  width: auto;
  margin-top: 15px;
}

.view-control {
  position: absolute;
  bottom: 0;
}

@media (max-width: 768px) {
  .view-root {
    position: relative;
    margin: 0 auto;
  }

  .view {
    height: initial;
  }

  .view-image {
    width: 100%;
    height: auto;
  }
}
</style>
