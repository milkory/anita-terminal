<template>
  <div class="site-navbar only-pc">
    <NuxtLink to="/" class="site-logo">
      <img src="/img/navlogo.png" alt="logo" />
      <div class="title">TERMINAL</div>
    </NuxtLink>
    <div class="site-nav" style="justify-content: right">
      <slot name="left" />
    </div>
    <div class="site-nav" style="margin-left: 230px">
      <slot name="right" />
    </div>
  </div>
  <div class="m-site-navbar only-m">
    <div class="main px-3">
      <div class="title">TERMINAL</div>
      <BButton v-b-toggle.collapse-1> — </BButton>
    </div>
    <BCollapse id="collapse-1"> . </BCollapse>
  </div>
</template>

<style scoped lang="scss">
.site-navbar {
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

  .title {
    text-align: center;
    font-weight: bold;
    width: 100%;
    letter-spacing: 4px;
    font-size: 24px;
    margin-left: 4px;
    position: absolute;
    top: 40%;
  }

  .site-logo {
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

  .site-logo:hover {
    filter: drop-shadow(black 0 0 8px);
  }

  .nav {
    display: flex;
    width: 50%;
    gap: 20px;
  }
}

.site-navbar::before,
.site-navbar::after {
  content: '';
  position: absolute;
  aspect-ratio: 1 / 1;
  height: 100%;
}

.site-navbar::before {
  left: 0;
  transform: translateX(-100%);
  background: linear-gradient(-45deg, #00000090, #000000a0 50%, transparent 50%);
}

.site-navbar::after {
  right: 0;
  transform: translateX(100%);
  background: linear-gradient(45deg, #00000090, #000000a0 50%, transparent 50%);
}

.m-site-navbar {
  position: sticky;
  top: 0;
  z-index: 2000;

  .main {
    height: 50px;
    width: 100vw;
    color: #eee;
    background: #000000a0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    backdrop-filter: blur(1rem);
  }

  .title {
    font-weight: bold;
    letter-spacing: 4px;
    font-size: 24px;
    margin-left: 4px;
  }
}
</style>
