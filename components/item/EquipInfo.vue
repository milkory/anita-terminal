<script setup lang="ts">
const props = defineProps<{
  data: Equipment;
}>();

const level = ref(1);
const maxSkill = equipSkillMax(props.data.subType);
const randomSkills = ref<RandomSkill[]>([]);
const pendingSkill = ref<RandomSkill>();
const refreshCount = ref(0);

const pendingConfilct = computed(() =>
  randomSkills.value.some((it) => it.id == pendingSkill.value?.id)
);

function checkPendingSkill() {
  if (randomSkills.value.length < maxSkill && pendingSkill.value) {
    randomSkills.value.push(pendingSkill.value);
    pendingSkill.value = undefined;
  }
}

function handleRandomSkillSelect(result: RandomSkill[]) {
  document.getElementById('target-randsk-popover')?.click();
  randomSkills.value = result;
  refreshCount.value = -1;
  checkPendingSkill();
}

async function addRandomSkill() {
  if (pendingSkill.value) return;

  const data = props.data;
  const filteredSet = (await getRandomSkillSet(data.randomSkills[0].id)).skills.filter(
    (it) => !data.excludeSkills.includes(it.id)
  );
  const randSkill = setRandomValue(filteredSet[Math.floor(Math.random() * filteredSet.length)]);
  if (
    randomSkills.value.length < maxSkill &&
    !randomSkills.value.some((it) => it.id == randSkill.id)
  ) {
    randomSkills.value.push(randSkill);
  } else {
    pendingSkill.value = randSkill;
  }

  if (refreshCount.value > -1) {
    refreshCount.value += 1;
  }
}

function removeRandomSkill(skill: RandomSkill) {
  if (canRemove(skill)) {
    randomSkills.value = randomSkills.value.filter((it) => it.id != skill.id);
    checkPendingSkill();
  }
}

function removePendingSkill() {
  pendingSkill.value = undefined;
}

function isConfilct(skill: RandomSkill) {
  return skill.id == pendingSkill.value?.id;
}

function canRemove(skill: RandomSkill) {
  return pendingSkill.value != undefined && (!pendingConfilct.value || isConfilct(skill));
}
</script>

<template>
  <div class="d-flex mx-2 my-2">
    <div class="me-3 text-nowrap fw-bold text-secondary">等级</div>
    <input v-model.number="level" type="range" class="form-range" min="1" max="60" />
    <div class="equip-level ms-3 text-nowrap">Lv. {{ level }}</div>
  </div>
  <BCard variant="dark" class="mx-out-1">
    <div class="row">
      <div class="col-4 col-md-2 text-secondary fw-bold text-md-end">基础属性</div>
      <div class="col-8 col-md-10">
        <div v-for="(attr, key) in equipAttrMap" :key="attr.name">
          <div v-if="data.attr[key] != 0">
            <div class="equip-attr-icon me-2">
              <img
                v-if="attr.icon"
                :src="`/img/icon/char/attr_${attr.icon}.png`"
                class="img-fluid"
                :alt="attr.name"
              />
            </div>
            <span class="align-top">
              {{ attr.name }}
              <span class="text-warning ms-2">
                +{{ attr.parse(attr.grow(data.attr[key], data.growth[key], level, 0)) }}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-1 mt-md-0">
      <div class="col-3 col-md-2 text-secondary fw-bold text-md-end">词缀</div>
      <div class="col-9 col-md-10 fs-small align-self-end text-danger">
        词缀数量 {{ randomSkills.length }}/{{ equipSkillMax(data.subType) }}
        <span v-if="refreshCount > 0" class="text-secondary ms-3"> 刷新数 {{ refreshCount }} </span>
        <span v-else-if="refreshCount == -1" class="text-secondary ms-3">自定义词缀</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-11 ps-2 ps-md-2 fs-small">
        <ul class="ms-md-4 mb-0">
          <li v-for="skill in data.skills" :key="skill.id" v-html="skill.desc"></li>
          <li v-for="skill in randomSkills" :key="skill.id">
            <BBadge v-if="isConfilct(skill)" variant="danger" class="me-1">冲突</BBadge>
            <span
              :class="['equip-randsk-entry', canRemove(skill) && 'removable']"
              @click="removeRandomSkill(skill)"
              v-html="skill.desc"
            ></span>
          </li>
          <li v-if="pendingSkill" class="text-secondary">
            <BBadge variant="warning" class="me-1">替换</BBadge>
            <span
              class="equip-randsk-entry removable"
              @click="removePendingSkill()"
              v-html="pendingSkill.desc"
            ></span>
          </li>
          <li v-if="data.randomSkills.length > 0" class="text-secondary">
            <div v-if="!pendingSkill" class="equip-randsk-add" @click="addRandomSkill()">
              <Icon name="material-symbols:add" class="equip-randsk-add-icon" />
              {{ data.randomSkills[0].name }}
            </div>
            <div v-else class="equip-randsk-add" @click="addRandomSkill()">
              <Icon name="material-symbols:close-rounded" class="equip-randsk-add-icon" />
              词缀已满
            </div>
            <div id="target-randsk-popover" class="ms-2 equip-randsk-add">
              <Icon name="mdi:tools" class="equip-randsk-add-icon" />
              自定义
            </div>
            <BPopover
              class="randsk-popover"
              target="target-randsk-popover"
              click
              placement="top"
              :delay="0"
              no-auto-close
            >
              <ItemEquipRandomSkill
                :data="data"
                :pre-skills="randomSkills.slice()"
                @result="handleRandomSkillSelect($event)"
              />
            </BPopover>
          </li>
        </ul>
      </div>
    </div>
  </BCard>
</template>

<style class="scss">
.equip-attr-icon {
  display: inline-block;
  width: 1.2em;
  vertical-align: 0.1em;
}

.equip-level {
  width: 3.1em;
}

.equip-randsk-entry {
  cursor: pointer;
  text-decoration: line-through #aaaaaa00;
  transition: all 0.2s ease;

  &:hover {
    color: #aaa;
  }

  &.removable:hover {
    text-decoration: line-through #aaaaaaff;
  }
}

.equip-randsk-add {
  display: inline-block;
  margin-top: 4px;
  padding: 0 8px 1px 7px;
  border-radius: 0.8em;
  color: #888;
  border: 1px dashed #888;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.equip-randsk-add:hover {
  opacity: 1;
}

.equip-randsk-add-icon {
  margin-top: -0.2em;
}

.randsk-popover {
  --bs-popover-max-width: 800px;
  .popover-body {
    padding: 0;
  }
}
</style>
