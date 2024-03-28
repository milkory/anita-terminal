<script setup lang="ts">
import AnitaPanel from '../common/AnitaPanel.vue';

defineProps<{
  data: UnitSummary[];
}>();

defineEmits(['click-char']);
</script>

<template>
  <AnitaPanel class="char-list-panel h-100">
    <div class="char-list row h-100 pb-5">
      <div class="col-md-3">
        <BButton>123</BButton>
      </div>
      <div class="col-md-9 overflow-y-auto h-100 mt-2">
        <div class="char-list-grid d-flex flex-wrap">
          <NuxtLink
            v-for="char in data"
            :key="char.id"
            :to="`/char/${char.id - 10000000}`"
            class="char-list-item position-relative"
            @click="$emit('click-char')"
          >
            <NuxtPicture
              :src="`/img/char/${char.views[0]}/face.png`"
              width="94px"
              :img-attrs="{ class: 'char-list-item-img' }"
            ></NuxtPicture>
            <div class="char-list-item-name text-light text-center">{{ char.name }}</div>
            <div class="char-list-item-tip">
              <div class="char-list-item-card d-flex">
                <div
                  v-for="(skill, i) in char.skill"
                  :key="i"
                  :class="['char-list-item-card-item', `card-${skill.toLowerCase()}`]"
                ></div>
              </div>
              <div class="char-list-item-collap">
                <NuxtPicture
                  class="char-list-item-line"
                  :src="`/img/icon/char/line_${lineName(char.line)}.png`"
                  :img-attrs="{ alt: lineLocale(char.line) }"
                  width="48px"
                />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </AnitaPanel>
</template>

<style lang="scss">
.char-list-grid {
  gap: 1rem;
}

.char-list-item {
  max-width: 94px;
  flex: 1 0 10%;
  background: var(--bs-gray-500);
  border-radius: 0.4em;
}

.char-list-item-collap {
  opacity: 0;
  transition: opacity 0.2s ease;
}

.char-list-item:hover {
  .char-list-item-collap {
    opacity: 1;
  }
}

.char-list-item-img {
  border-radius: 0.4em;
}

.char-list-item-name {
  position: absolute;
  background: #000000c0;
  width: 94px;
  bottom: 0;
  border-radius: 0 0 0.4em 0.4em;
}

.char-list-item-card {
  gap: 2px;
  padding: 1px;
  background: var(--bs-gray-900);
}

.char-list-item-card-item {
  width: 1rem;
  height: 0.2rem;
}

.card-red {
  background: var(--card-color-red);
}

.card-blue {
  background: var(--card-color-blue);
}

.card-green {
  background: var(--card-color-green);
}

.card-yellow {
  background: var(--card-color-yellow);
}

.card-purple {
  background: var(--card-color-purple);
}

.char-list-item-tip {
  position: absolute;
  top: 0;
}

@media (max-width: 768px) {
  .char-list-item {
    max-width: 75px;
  }

  .char-list-item-img {
    width: 75px;
  }

  .char-list-item-name {
    width: 75px;
    font-size: 13px;
  }
}
</style>
