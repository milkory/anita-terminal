<script setup lang="ts">
defineProps<{
  name: string;
  options: string[];
}>();

const model = defineModel<boolean[]>({ required: true });
model.value.fill(false);
</script>

<template>
  <div class="char-filter-item">
    <div class="char-filter-name fs-5 fw-bold">
      {{ name }}
    </div>
    <div class="char-filter-content">
      <BButton
        v-for="(opt, i) in options"
        :key="opt"
        v-model:pressed="model[i]"
        variant="outline-secondary"
        class="char-filter-option mt-2 me-2"
        pill
      >
        {{ opt }}
      </BButton>
    </div>
  </div>
</template>
