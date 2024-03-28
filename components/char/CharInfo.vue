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
        :class="[
          'char-attr',
          'd-flex',
          'justify-content-between',
          isGrowth(attr) ? 'col-4' : ['col-6', 'col-md-4']
        ]"
      >
        <div>
          <div :class="['char-attr-icon', 'me-1', isGrowth(attr) || 'only-pc']">
            <NuxtPicture
              v-if="attr.icon"
              :src="`/img/icon/char/attr_${attr.icon}.png`"
              :img-attrs="{ class: 'img-fluid', alt: attr.name }"
            />
          </div>
          <span :class="isGrowth(attr) && 'only-pc'">{{ attr.name }}</span>
        </div>
        <div v-if="isGrowth(attr)" class="me-3">
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
      <div class="char-level ms-3 text-nowrap">Lv. {{ level }}</div>
    </div>
    <div v-if="trustLv > 1" class="d-flex flex-wrap mt-2">
      <div
        v-for="(attr, key) in growthAttrMap"
        :key="attr.name"
        class="char-attr d-flex justify-content-between"
      >
        <div>
          <div class="char-attr-icon me-1">
            <img
              v-if="attr.icon"
              class="img-fluid"
              :src="`/img/icon/char/attr_${attr.icon}.png`"
              :alt="`${attr.name}`"
            />
          </div>
        </div>
        <div class="char-attr-plus me-3">
          +{{ attr.parse(data.growth[key] * Math.floor(trustLv / 2)) }}
        </div>
      </div>
    </div>
    <div v-else class="char-attr-placeholder text-center mt-2">滑动滑块查看默契加成</div>
    <div class="d-flex mt-1">
      <div class="me-2 text-nowrap">默契</div>
      <input v-model.number="trustLv" type="range" class="form-range" min="1" max="10" />
      <div class="char-level ms-3 text-nowrap">Lv. {{ trustLv }}</div>
    </div>
  </BCard>
  <BCard variant="dark" class="mt-2" body-class="d-flex flex-wrap">
    <div
      v-for="(skill, i) in filterHomeSkill(data.homeSkill)"
      :key="i"
      class="char-lifesk d-flex col-md-6 col-12"
    >
      <div class="char-lifesk-tag position-relative">
        <img
          class="char-lifesk-img"
          :src="`/img/icon/char/life_skill_${skill.tag}.png`"
          :alt="homeSkillTagLocale(skill.tag)"
        />
        <div class="char-lifesk-label">{{ homeSkillTagLocale(skill.tag) }}</div>
      </div>
      <div class="char-lifesk-detail ms-2">
        <div
          v-for="(item, j) in filterHomeSkill(data.homeSkill, skill)"
          :key="j"
          class="char-lifesk-item"
        >
          <div class="char-lifesk-name fw-bold">
            {{ item.name }}
            <BBadge class="ms-1" variant="danger">共振 {{ item.resonanceLv }}</BBadge>
          </div>
          <div class="char-lifesk-desc text-secondary">{{ item.desc }}</div>
        </div>
      </div>
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

<style>
.char-attr {
  height: 2em;
}

.char-attr-icon {
  display: inline-block;
  width: 1.2em;
  vertical-align: 0.1em;
}

.char-attr-plus {
  color: var(--bs-teal);
}

.char-attr-placeholder {
  height: 2em;
}

.char-level {
  width: 3em;
}

.char-lifesk-img {
  width: 3.8rem;
}

.char-lifesk-label {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 4rem;
  font-size: 13px;
}

.char-lifesk-desc {
  font-size: 14px;
}
</style>
