<script setup lang="ts">
const navOpened = ref(false);

onMounted(() => {
  for (const element of document.getElementsByClassName('site-nav-item')) {
    element.addEventListener('click', function () {
      navOpened.value = false;
    });
  }
});
</script>

<template>
  <div class="site-nav only-pc">
    <NuxtLink to="/home" class="site-nav-logo">
      <img src="/img/navlogo.png" alt="logo" />
      <div class="site-nav-title">TERMINAL</div>
    </NuxtLink>
    <div class="site-nav-content justify-content-end">
      <slot name="left" />
    </div>
    <div class="site-nav-content" style="margin-left: 230px">
      <slot name="right" />
    </div>
  </div>
  <div class="m-site-header only-m">
    <div class="m-site-main px-3">
      <NuxtLink to="/home" class="m-site-nav-title plain-link">TERMINAL</NuxtLink>
      <BButton v-b-toggle.m-site-nav>
        <Icon name="material-symbols:menu-rounded" class="fs-5" />
      </BButton>
    </div>
    <BCollapse id="m-site-nav" v-model="navOpened" horizontal>
      <div class="m-site-nav-content d-flex flex-column py-2 px-3">
        <slot name="left" />
        <slot name="right" />
      </div>
    </BCollapse>
    <Transition>
      <div
        v-if="navOpened"
        class="m-site-nav-cover fixed-top w-100 h-100"
        @click="navOpened = false"
      ></div>
    </Transition>
  </div>
</template>

<style lang="scss">
.site-nav {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  height: 60px;
  width: 85vw;
  bottom: 0;
  color: #eee;
  background: linear-gradient(#000000a0, #00000090);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;

  .site-nav-title {
    text-align: center;
    font-weight: bold;
    width: 100%;
    letter-spacing: 4px;
    font-size: 24px;
    margin-left: 4px;
    position: absolute;
    top: 40%;
  }

  .site-nav-logo {
    width: 184px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -65px;
    filter: drop-shadow(black 0 0 4px);
    user-select: none;
    color: #fff;
    transition: filter 0.2s ease-out;
  }

  .site-nav-logo:hover {
    filter: drop-shadow(black 0 0 8px);
  }

  .site-nav-content {
    display: flex;
    width: 50%;
    gap: 20px;
  }
}

.site-nav::before,
.site-nav::after {
  content: '';
  position: absolute;
  aspect-ratio: 1 / 1;
  height: 100%;
}

.site-nav::before {
  left: 0;
  transform: translateX(-100%);
  background: linear-gradient(-45deg, #00000090, #000000a0 50%, transparent 50%);
}

.site-nav::after {
  right: 0;
  transform: translateX(100%);
  background: linear-gradient(45deg, #00000090, #000000a0 50%, transparent 50%);
}

.m-site-header {
  position: sticky;
  top: 0;
  z-index: 3000;

  .m-site-main {
    position: relative;
    z-index: 3010;
    height: 50px;
    width: 100vw;
    color: #eee;
    background: #1a1a1af0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .m-site-nav-title {
    font-weight: bold;
    letter-spacing: 4px;
    font-size: 24px;
    margin-left: 4px;
  }
}

#m-site-nav {
  height: calc(100dvh - 50px);
  position: fixed;
  bottom: 0;
  z-index: 2010;
}

.m-site-nav-content {
  width: calc(100vw - 3rem);
  height: 100dvh;
  background: var(--bs-gray-900);
  gap: 0.3em;
}

.m-site-nav-cover {
  background: #000000a0;
}
</style>
