<script setup lang="ts">
const props = defineProps<{
  data: UnitSummary[];
}>();

defineEmits(['exit']);

const searchInput = ref('');
const searchLine = ref(new Array(3));
const searchSide = ref(new Array(6));

function isSelected(array: Ref<any[]>, n: number) {
  return array.value.every((it) => !it) || array.value[n];
}

function filteredData(): UnitSummary[] {
  const forceAll = searchInput.value == '~forceAll';
  return props.data.filter((it) => {
    return (
      (forceAll || (it.name.includes(searchInput.value) && it.online)) &&
      isSelected(searchLine, it.line - 1) &&
      isSelected(searchSide, it.side - 1)
    );
  });
}
</script>

<template>
  <AnitaPanel class="char-list-panel h-100">
    <div class="char-list row h-100 pb-5">
      <div class="col-md-3 mb-2">
        <div class="d-flex">
          <BButton v-b-toggle.char-filter class="only-m me-2">
            <Icon name="material-symbols:filter-alt" class="fs-5" />
          </BButton>
          <BFormInput v-model="searchInput" placeholder="搜索.." />
          <div class="only-m d-inline-block float-end ms-2">
            <BButton variant="danger" @click="$emit('exit')">
              <Icon name="material-symbols:close-rounded" class="fs-5" />
            </BButton>
          </div>
        </div>
        <BCollapse id="char-filter">
          <CharListFilter
            v-model="searchLine"
            class="mt-2"
            name="站位"
            :options="['前排', '中排', '后排']"
          />
          <CharListFilter
            v-model="searchSide"
            class="mt-2"
            name="阵营"
            :options="[
              '黑月锁链',
              '科伦巴商会',
              '曼杜斯帝国',
              '环大陆铁道联盟',
              '索思学会',
              '“园丁”'
            ]"
          />
        </BCollapse>
      </div>
      <div class="col-md-9 overflow-y-auto h-100 mt-2">
        <div class="char-list-grid d-grid">
          <NuxtLink
            v-for="char in filteredData()"
            :key="char.id"
            :to="`/char/${char.id - 10000000}`"
            :class="['char-list-item', 'position-relative', `bg-quality-${char.quality}`]"
            @click="$emit('exit')"
          >
            <div class="char-list-item-cover"></div>
            <img
              :src="`/img/char/${char.views[0]}/face.webp`"
              :alt="char.name"
              class="char-list-item-img"
            />
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
                <img
                  class="char-list-item-line"
                  :src="`/img/icon/char/line_${lineName(char.line)}.png`"
                  :alt="lineLocale(char.line)"
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
  aspect-ratio: 1;
  flex: 1 0 10%;
  border-radius: 0.4em;
  overflow: clip;
}

.char-list-item-cover {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000000a0;
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
  transition: scale 0.2s ease;
}

.char-list-item-name {
  position: absolute;
  background: #000000c0;
  width: var(--char-list-item-width);
  bottom: 0;
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

.char-list-item-line {
  width: 48px;
}

@media (min-width: 768px) {
  #char-filter {
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
