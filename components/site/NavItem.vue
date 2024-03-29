<script setup lang="ts">
defineProps<{
  name: string;
  icon?: string;
  to: string;
}>();
</script>

<template>
  <NuxtLink class="site-nav-item" :to="to">
    <img v-if="icon" :src="icon" :alt="name" class="site-nav-item-icon" />
    <div class="site-nav-item-name">
      {{ name }}
    </div>
  </NuxtLink>
</template>

<style scoped>
.site-nav-item {
  display: flex;
  padding: 2px 10px 4px 7px;
  color: #fff;
  text-decoration: none;
  align-items: center;
  border-radius: 10px;
}
.site-nav-item:hover,
.site-nav-item.router-link-active {
  color: #000;
  background: #fff;

  .site-nav-item-icon {
    filter: invert(1);
  }
}
.site-nav-item.router-link-active {
  pointer-events: none;
}
.site-nav-item-icon {
  height: 30px;
  width: auto;
  margin-top: 2px;
  margin-right: 3px;
}
.site-nav-item-name {
  font-weight: bold;
  font-size: 20px;
}
</style>
