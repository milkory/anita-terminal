<template>
  <div class="panel px-4 py-3">
    <div class="content h-100">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.panel {
  background: #00000090;
  box-shadow: black 0px 1px 3px;
  border-radius: 8px;
  backdrop-filter: blur(1rem);
}
.content {
  color: var(--anita-color-text);
  overflow-wrap: break-word;
}
</style>
