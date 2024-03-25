<template>
  <div class="panel px-4 py-3">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.panel {
  background: #00000090;
  box-shadow: black 0px 1px 3px;
  border-radius: 8px;
}
.content {
  color: var(--anita-color-text);
  overflow-wrap: break-word;
}
</style>
