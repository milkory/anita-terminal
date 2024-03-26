<script setup lang="ts">
defineProps<{
  data: Unit;
}>();

const level = ref(1);
const trustLv = ref(1);
</script>

<template>
  <BCard variant="dark">
    <div class="d-flex flex-wrap">
      <div
        v-for="(attr, key) in attrMap"
        :key="attr.name"
        class="info-attr d-flex justify-content-between"
      >
        <div>
          <div class="info-attr-icon me-1">
            <img
              v-if="attr.icon"
              class="img-fluid"
              :src="`/img/icon/char/attr_${attr.icon}.png`"
              :alt="`${attr.name}`"
            />
          </div>
          {{ attr.name }}
        </div>
        <div v-if="attr instanceof UnitGrowthAttribute" class="me-3">
          {{ attr.parse(attr.grow(data.attr[key], data.growth[key], level, trustLv)) }}
        </div>
        <div v-else class="me-3">
          {{ attr.parse(data.attr[key]) }}
        </div>
      </div>
    </div>
    <div class="d-flex mt-1">
      <div class="me-2 text-nowrap">等级</div>
      <input v-model.number="level" type="range" class="form-range" min="1" max="60" />
      <div class="info-level ms-3 text-nowrap">Lv. {{ level }}</div>
    </div>
    <div v-if="trustLv > 1" class="d-flex flex-wrap mt-2">
      <div
        v-for="(attr, key) in growthAttrMap"
        :key="attr.name"
        class="info-attr d-flex justify-content-between"
      >
        <div>
          <div class="info-attr-icon me-1">
            <img
              v-if="attr.icon"
              class="img-fluid"
              :src="`/img/icon/char/attr_${attr.icon}.png`"
              :alt="`${attr.name}`"
            />
          </div>
          {{ attr.name }}
        </div>
        <div class="info-attr-plus me-3">
          +{{ attr.parse(data.growth[key] * Math.floor(trustLv / 2)) }}
        </div>
      </div>
    </div>
    <div v-else class="info-attr-plus-placeholder text-center mt-2">滑动滑块查看默契加成</div>
    <div class="d-flex mt-1">
      <div class="me-2 text-nowrap">默契</div>
      <input v-model.number="trustLv" type="range" class="form-range" min="1" max="10" />
      <div class="info-level ms-3 text-nowrap">Lv. {{ trustLv }}</div>
    </div>
  </BCard>
  <BCard variant="dark" class="mt-2">
    <div>生日：{{ data.birthday }}</div>
    <div>性别：{{ data.gender }}</div>
    <div>身高：{{ data.height }}</div>
    <div>出身地：{{ data.birthplace }}</div>
    <div>现身份：{{ data.identity }}</div>
    <div>升构能力：{{ data.ability }}</div>
  </BCard>
  <BCard variant="dark" class="main-text mt-2">
    <p v-for="(resume, i) in data.resume" :key="i">{{ resume.des }}</p>
  </BCard>
</template>

<style scoped>
.info-attr {
  width: 33.3%;
  height: 2em;
}

.info-attr-icon {
  display: inline-block;
  width: 1.2em;
  vertical-align: 0.1em;
}

.info-attr-plus {
  color: var(--bs-teal);
}

.info-attr-plus-placeholder {
  height: 2em;
}

.info-level {
  width: 3em;
}

@media (max-width: 768px) {
  .info-attr {
    width: 50%;
  }
}
</style>
