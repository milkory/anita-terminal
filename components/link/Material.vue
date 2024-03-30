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
      <NuxtPicture :src="`/img/mat/${data.cId}.png`" :width="width" />
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
  aspect-ratio: 1 / 1;
  display: inline-flex;
  align-items: center;
  border-radius: 50%;
  img {
    border-radius: 50%;
  }
}
</style>
