<template>
  <div class="anita-loading text-center">
    <img src="/img/icon/char/camp_6.png" alt="Loading..." />
  </div>
</template>

<style scoped>
.anita-loading {
  animation: rotate 2.2s infinite ease-in-out;
  filter: drop-shadow(#000 0 0 2px);

  img {
    width: 200px;
    max-width: 85%;
  }
}

@keyframes rotate {
  0% {
    filter: drop-shadow(#000 0 0 8px);
    transform: rotateY(0);
  }
  50% {
    filter: drop-shadow(#000 0 0 0);
    transform: rotateY(90deg);
  }
  100% {
    filter: drop-shadow(#000 0 0 8px);
    transform: rotateY(0);
  }
}
</style>
