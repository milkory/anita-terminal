<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps<{
  error: NuxtError;
}>();

useHead({
  titleTemplate: ` // ERROR ${props.error.statusCode} / Anita Terminal //`
});
</script>

<template>
  <div class="rs-error-page lang-zh h-screen text-light">
    <div class="error-message">
      <div class="fs-1 fw-bold">{{ error.statusCode }}</div>
      <div class="text-secondary">
        {{ error.statusMessage }}
      </div>
      <div class="mt-4">
        <NuxtLink to="/home">
          <BButton variant="secondary" size="sm">Reboot</BButton>
        </NuxtLink>
      </div>
    </div>
    <div class="error-band">
      <template v-for="i in new Array(30)" :key="i">
        <div>ERROR</div>
        <div>{{ error.statusCode }}</div>
      </template>
    </div>
  </div>
</template>

<style class="scss">
body {
  overflow-y: auto;
}

.rs-error-page {
  background: #020410;
}

.error-message {
  position: fixed;
  bottom: 50%;
  left: 25%;
  font-size: 16px;
}

.error-band {
  position: fixed;
  top: 65%;
  left: 50%;
  translate: -50%;
  display: flex;
  flex-wrap: nowrap;
  gap: 15px;
  padding: 14px;
  background: var(--bs-danger);
  line-height: 1;
  user-select: none;

  div {
    font-weight: bold;
    text-wrap: nowrap;
    font-size: 20px;
  }
}
</style>
