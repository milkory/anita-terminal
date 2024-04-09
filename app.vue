<script setup lang="ts">
useHead({
  titleTemplate: (chunk) => (chunk ? `${chunk} / Anita Terminal` : 'Anita Terminal')
});

const bgImage = useBackground();
</script>

<template>
  <NuxtLoadingIndicator />
  <div id="background" :style="{ backgroundImage: `url(${bgImage})` }"></div>
  <SiteNav>
    <template #left>
      <SiteNavItem icon="/img/icon/nav/char.png" name="角色" to="/char" />
      <SiteNavItem icon="/img/icon/nav/item.png" name="物品" to="/item"></SiteNavItem>
    </template>
    <template #right>
      <!-- <SiteNavItem icon="/img/icon/map.png" name="地图" to="/"></SiteNavItem> -->
      <SiteNavItem icon="/img/icon/nav/about.png" name="关于" to="/about" />
    </template>
  </SiteNav>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style scoped>
#background {
  position: fixed;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  filter: blur(15px) brightness(0.85);
  scale: 1.1;
  top: 0;
}
main {
  margin-bottom: var(--anita-bottom-height);
}
</style>
