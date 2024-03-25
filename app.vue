<script setup lang="ts">
useHead({
  titleTemplate: (chunk) => (chunk ? `${chunk} / Anita Terminal` : 'Anita Terminal')
});
</script>

<template>
  <NuxtLoadingIndicator />
  <div id="background"></div>
  <SiteNav>
    <template #left>
      <SiteNavItem icon="/img/icon/nav/char.png" name="角色" to="/char" />
      <!-- <SiteNavItem icon="/img/icon/nav/item.png" name="物品" to="/"></SiteNavItem> -->
    </template>
    <template #right>
      <!-- <SiteNavItem icon="/img/icon/map.png" name="地图" to="/"></SiteNavItem> -->
      <SiteNavItem icon="/img/icon/nav/about.png" name="关于" to="/about" />
    </template>
  </SiteNav>
  <main class="container-xl py-md-3 lang-zh">
    <NuxtPage />
  </main>
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
