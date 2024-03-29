<script setup lang="ts">
defineProps<{
  data: Unit;
}>();

const level = ref(1);
const trustLv = ref(1);
</script>

<template>
  <div class="rs-char-info">
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
          class="char-attr d-flex justify-content-between col-4"
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
            <span class="only-pc">{{ attr.name }}</span>
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
        v-for="(skill, i) in filterHomeSkill(data.homeSkills)"
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
            v-for="(item, j) in filterHomeSkill(data.homeSkills, skill)"
            :key="j"
            class="char-lifesk-item"
          >
            <div class="char-lifesk-name fw-bold">
              {{ item.name }}
              <BBadge class="ms-1" variant="danger">共振 {{ item.resonanceLv }}</BBadge>
            </div>
            <div class="char-lifesk-desc text-secondary fs-small">{{ item.desc }}</div>
          </div>
        </div>
      </div>
    </BCard>
    <BCard variant="dark" class="mt-2">
      <div v-for="food in data.foods" :key="food.name" class="d-flex">
        <div class="char-food-img p-2">
          <NuxtPicture
            :src="`img/food/${food.id}.png`"
            width="100px"
            :img-attrs="{ class: 'img-fluid', alt: food.name }"
          />
        </div>
        <div class="char-food-info ms-3 d-flex flex-column">
          <div class="char-food-name fw-bold">
            {{ food.name }}
          </div>
          <div class="char-food-des flex-grow-1 text-secondary fs-small">{{ food.letter }}</div>
          <div class="char-food-tip fs-small">
            <IFatigue>-{{ food.energy }}</IFatigue>
            <IExpiration class="ms-2"> {{ food.expirationDate }} 天 </IExpiration>
          </div>
        </div>
      </div>
    </BCard>
  </div>
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

.char-food-img {
  display: flex;
  align-items: center;
  background: var(--bs-gray-700);
  border: 4px solid #888;
  max-width: 30%;
  height: max-content;
  aspect-ratio: 1 / 1;
}
</style>
