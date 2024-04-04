<script setup lang="ts">
defineProps<{
  name: string;
  options: string[];
}>();

const model = defineModel<boolean[]>({ required: true });
model.value.fill(false);
</script>

<template>
  <div class="anita-filter-item">
    <div class="anita-filter-name fs-5 fw-bold">
      {{ name }}
    </div>
    <div class="anita-filter-content">
      <BButton
        v-for="(opt, i) in options"
        :key="opt"
        v-model:pressed="model[i]"
        variant="outline-secondary"
        class="anita-filter-option mt-2 me-2"
        pill
      >
        {{ opt }}
      </BButton>
    </div>
  </div>
</template>

<style>
@media (max-width: 768px) {
  .anita-filter-option:not(.active):hover {
    color: var(--bs-btn-color);
    background-color: inherit;
    border-color: inherit;
  }
}
</style>
