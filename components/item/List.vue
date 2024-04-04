<script setup lang="ts">
defineProps<{
  data: ItemSummaryList;
}>();

const searchInput = ref('');
const searchType = ref('equip');
const searchEquipSide = ref(new Array(7));

const forceAll = computed(() => searchInput.value == '~forceAll');

function isSelected(array: Ref<any[]>, n: number) {
  return array.value.every((it) => !it) || array.value[n];
}

function checkShow(item: ItemSummary, type: ItemType): boolean {
  return (
    searchType.value == type &&
    (item.online || forceAll) &&
    item.name.includes(searchInput.value) &&
    (type != 'equip' || isSelected(searchEquipSide, (item as EquipSummary).side))
  );
}

onMounted(() => {
  for (const el of document.getElementsByClassName('item-list-item-name')) {
    if (el.clientHeight < el.scrollHeight) {
      el.classList.add('small');
    }
  }
});
</script>

<template>
  <div class="item-list d-flex flex-column h-100 mx-out-1">
    <div class="mb-3">
      <div class="d-flex">
        <BButton v-b-toggle.item-filter class="me-2">
          <Icon name="material-symbols:filter-alt" class="fs-5" />
        </BButton>
        <BNav pills class="flex-nowrap me-1">
          <BNavItem class="text-nowrap" active>装备</BNavItem>
        </BNav>
        <BFormInput v-model="searchInput" placeholder="搜索.." />
      </div>
      <BCollapse id="item-filter">
        <CharListFilter
          v-model="searchEquipSide"
          class="mt-2"
          name="阵营"
          :options="['通用', '黑月', '商会', '帝国', '铁盟', '学会', '阿妮塔']"
        />
      </BCollapse>
    </div>
    <div class="item-list-content overflow-y-scroll">
      <div class="item-list-grid d-grid">
        <NuxtLink
          v-for="item in data.equip"
          v-show="checkShow(item, 'equip')"
          :key="item.id"
          :to="`/item/${item.id}`"
          :class="['item-list-item position-relative', `bg-quality-${item.quality}`]"
          :style="{ backgroundImage: `url(/img/res/${item.cId}.webp)` }"
        >
          <div class="item-list-item-cover"></div>
          <div
            class="item-list-item-name text-light text-center d-flex justify-content-around align-items-center"
          >
            {{ item.name }}
          </div>
          <div class="item-list-item-tip">
            <ItemEquipListTag v-if="true" :data="item as EquipSummary" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>
.item-list-grid {
  gap: 0.5rem;
  padding-top: 2px;
  padding-left: 2px;
  grid-template-columns: repeat(auto-fill, minmax(var(--item-list-item-width), 1fr));
}

.item-list-item {
  max-width: var(--item-list-item-width);
  aspect-ratio: 1.15;
  flex: 1 0 10%;
  border-radius: 0.4em;
  overflow: clip;
  background-position: center;
  background-size: 80%;
  background-repeat: no-repeat;
  transition: background-size 0.2s ease;
}

.item-list-item-cover {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #000000a0;
  opacity: 0;
  transition: opacity 0.2s ease;
  z-index: 10;
}

.item-list-item-tip {
  position: absolute;
  top: 0;
  z-index: 20;
}

.item-list-item:hover {
  .item-list-item-cover {
    opacity: 1;
  }

  .item-list-item-collap {
    opacity: 1;
  }

  background-size: 90%;
}

.item-list-item-img {
  width: var(--item-list-item-width);
  transition: scale 0.2s ease;
}

.item-list-item-name {
  position: absolute;
  background: #000000c0;
  width: var(--item-list-item-width);
  font-size: 13px;
  left: 0;
  bottom: 0;
  height: 1.5rem;
  z-index: 30;
}

.item-list-item-name.small {
  font-size: 10px;
  line-height: 100%;
}

.item-list-item.router-link-active {
  outline: 2px solid #eee;
  .item-list-item-name {
    color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important;
    font-weight: bold;
    background: #eee;
  }
}

@media (max-width: 768px) {
  .item-list {
    max-height: 480px;
  }

  .item-list-item-name {
    font-size: 12px;
  }
}
</style>
