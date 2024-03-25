<script setup lang="ts">
defineProps<{
  name: string;
  icon?: string;
  to: string;
}>();
</script>

<template>
  <NuxtLink class="item" :to="to">
    <img v-if="icon" :src="icon" :alt="name" class="icon" />
    <div class="name">
      {{ name }}
    </div>
  </NuxtLink>
</template>

<style scoped>
.item {
  display: flex;
  padding: 2px 10px 4px 7px;
  color: #fff;
  text-decoration: none;
  align-items: center;
  border-radius: 10px;
}
.item:hover,
.item.router-link-active {
  color: #000;
  background: #fff;

  .icon {
    filter: invert(1);
  }
}
.item.router-link-active {
  pointer-events: none;
}
.icon {
  height: 30px;
  width: auto;
  margin-top: 2px;
  margin-right: 3px;
}
.name {
  font-weight: bold;
  font-size: 20px;
}
</style>
