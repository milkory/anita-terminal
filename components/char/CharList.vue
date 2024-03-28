<script setup lang="ts">
import AnitaPanel from '../common/AnitaPanel.vue';

const props = defineProps<{
  data: UnitSummary[];
}>();

defineEmits(['exit']);

const searchInput = ref('');

function filteredData(): UnitSummary[] {
  return props.data.filter((it) => {
    return it.name.includes(searchInput.value);
  });
}
</script>

<template>
  <AnitaPanel class="char-list-panel h-100">
    <div class="char-list row h-100 pb-5">
      <div class="col-md-3">
        <div class="d-flex">
          <BButton v-b-toggle.char-list-filter class="only-m me-2">
            <Icon name="material-symbols:filter-alt" class="fs-5" />
          </BButton>
          <BFormInput v-model="searchInput" placeholder="搜索.." />
          <div class="only-m d-inline-block float-end ms-2">
            <BButton variant="danger" @click="$emit('exit')">
              <Icon name="material-symbols:close-rounded" class="fs-5" />
            </BButton>
          </div>
        </div>
        <BCollapse id="char-list-filter">
          <div class="mt-2">123</div>
        </BCollapse>
      </div>
      <div class="col-md-9 overflow-y-auto h-100 mt-2">
        <div class="char-list-grid d-grid">
          <NuxtLink
            v-for="char in filteredData()"
            :key="char.id"
            :to="`/char/${char.id - 10000000}`"
            :class="['char-list-item', 'position-relative', `quality-${char.quality}`]"
            @click="$emit('exit')"
          >
            <div class="char-list-item-cover"></div>
            <NuxtPicture
              :src="`/img/char/${char.views[0]}/face.png`"
              :img-attrs="{ class: 'char-list-item-img' }"
            ></NuxtPicture>
            <div class="char-list-item-name text-light text-center">{{ char.name }}</div>
            <div class="char-list-item-tip">
              <div class="char-list-item-card d-flex">
                <div
                  v-for="(skill, i) in char.skill"
                  :key="i"
                  :class="['char-list-item-card-item', `card-${skill}`]"
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
  grid-template-columns: repeat(auto-fill, minmax(var(--char-list-item-width), 1fr));
}

.char-list-item {
  max-width: var(--char-list-item-width);
  flex: 1 0 10%;
  border-radius: 0.4em;
  overflow: hidden;

  &.quality-n {
    background: var(--quality-color-n);
  }

  &.quality-r {
    background: var(--quality-color-r);
  }

  &.quality-sr {
    background: var(--quality-color-sr);
  }

  &.quality-ssr {
    background: var(--quality-color-ssr);
  }

  &.quality-ur {
    background: var(--quality-color-ur);
  }
}

.char-list-item-cover {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000000a0;
  border-radius: 0.4em;
  opacity: 0;
  transition: opacity 0.2s ease;
  z-index: 10;
}

.char-list-item-tip {
  position: absolute;
  top: 0;
  z-index: 20;
}

.char-list-item-collap {
  opacity: 0;
  transition: opacity 0.2s ease;
}

.char-list-item:hover {
  .char-list-item-cover {
    opacity: 1;
  }

  .char-list-item-collap {
    opacity: 1;
  }

  .char-list-item-img {
    scale: 1.1;
  }
}

.char-list-item-img {
  width: var(--char-list-item-width);
  border-radius: 0.4em;
  transition: scale 0.2s ease;
}

.char-list-item-name {
  position: absolute;
  background: #000000c0;
  width: var(--char-list-item-width);
  bottom: 0;
  border-radius: 0 0 0.4em 0.4em;
  z-index: 30;
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

@media (min-width: 768px) {
  #char-list-filter {
    display: block;
  }
}

@media (max-width: 768px) {
  .char-list-item {
    min-width: var(--char-list-item-width);
    max-width: var(--char-list-item-width);
  }

  .char-list-item-img {
    width: var(--char-list-item-width);
  }

  .char-list-item-name {
    width: var(--char-list-item-width);
    font-size: 13px;
  }
}
</style>
