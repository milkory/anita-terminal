<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps<{
  error: NuxtError;
}>();

useHead({
  titleTemplate: ` // ERROR ${props.error.statusCode} / Anita Terminal //`
});

onMounted(() => (document.body.style.overflow = 'auto'));
</script>

<template>
  <div class="rs-error-page lang-zh h-screen text-light">
    <div class="error-message">
      <div class="fs-1 fw-bold">{{ error.statusCode }}</div>
      <div class="text-secondary">
        {{ error.statusMessage }}
      </div>
      <div class="mt-4">
        <div class="text-secondary mb-1 fs-small">
          <span class="text-danger">$</span> anita-terminal
        </div>
        <NuxtLink to="/home">
          <BButton variant="secondary" size="sm">重启</BButton>
        </NuxtLink>
        <NuxtLink to="https://github.com/milkory/anita-terminal/issues">
          <BButton variant="secondary" class="d-inline-flex align-items-center ms-2" size="sm">
            <Icon name="mdi:github" class="me-1" /> 报告
          </BButton>
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
  padding: 12px;
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
