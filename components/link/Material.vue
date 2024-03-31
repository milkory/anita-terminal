<script setup lang="ts">
const props = defineProps<{
  data: SourceMaterial;
  width?: number;
}>();

const width = props.width || 36;
const image = useImage();
const matImg = image(`/img/mat/${props.data.cId}.png`, { width: width });
</script>

<template>
  <div
    v-b-popover.hover="data.des"
    class="link-material d-inline py-1"
    :style="{ lineHeight: `${width}px` }"
  >
    <div
      :class="['link-material-img', `bg-quality-${data.quality}`, ' align-middle']"
      :style="{ width: `${width}px`, backgroundImage: `url(${matImg})` }"
    ></div>
    <span class="link-material-name ms-2 align-middle">
      {{ data.name }}
    </span>
  </div>
</template>

<style>
.link-material {
  cursor: default;
}

.link-material-img {
  display: inline-block;
  border-radius: 50%;
  overflow: clip;
  aspect-ratio: 1;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
