<script setup lang="ts">
const props = defineProps<{
  data: SourceMaterial;
  width?: string;
}>();

const width = props.width || '36px';
</script>

<template>
  <div
    v-b-popover.hover="data.des"
    class="link-material d-inline align-center py-1"
    :style="{ lineHeight: width }"
  >
    <div :class="['link-material-img', `bg-quality-${data.quality}`]" :style="{ width: width }">
      <NuxtPicture :src="`/img/mat/${data.cId}.png`" />
    </div>
    <span class="link-material-name ms-2 align-center">
      {{ data.name }}
    </span>
  </div>
</template>

<style>
.link-material {
  cursor: default;
}

.link-material-img {
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 50%;
  overflow: hidden;
  aspect-ratio: 1;

  img {
    height: 100%;
  }
}
</style>
