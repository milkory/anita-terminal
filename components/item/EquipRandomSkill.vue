<script setup lang="ts">
const props = defineProps<{
  data: Equipment;
  preSkills: RandomSkill[];
}>();

const emit = defineEmits<{
  result: [skills: RandomSkill[]];
}>();

const maxSkill = equipSkillMax(props.data.subType) - 1;
const randomSkills = await getRandomSkillSet(props.data.randomSkills[0].id);
const selectedSkills = ref(
  props.preSkills
    .map((it) => randomSkills.skills.find((o) => o.id == it.id))
    .filter((it) => it != undefined)
);

function selectMax() {
  return selectedSkills.value.length >= maxSkill;
}

function excluded(skill: RandomSkill) {
  return props.data.excludeSkills.includes(skill.id);
}

function toggleSkill(skill: RandomSkill) {
  const newList = selectedSkills.value.filter((it) => it.id != skill.id);
  if (newList.length == selectedSkills.value.length && !selectMax()) {
    selectedSkills.value.push({ ...skill });
  } else {
    selectedSkills.value = newList;
  }
}

function submitResult() {
  emit(
    'result',
    selectedSkills.value.map((it) =>
      setRandomValue(
        it,
        parseFloat((document.getElementById(`randsk-input-${it.id}`) as HTMLFormElement)?.value)
      )
    )
  );
}
</script>

<template>
  <div class="equip-randsk-list d-flex flex-column font-text">
    <BListGroup class="overflow-y-auto" flush>
      <BListGroupItem
        v-for="skill in randomSkills.skills"
        :key="skill.id"
        variant="light"
        button
        :active="selectedSkills.some((it) => it.id == skill.id)"
        :disabled="excluded(skill)"
        :class="[
          'equip-randsk-item fs-small py-1 ps-3 d-flex justify-content-between align-items-center',
          excluded(skill) && 'excluded'
        ]"
        @click="toggleSkill(skill)"
      >
        <span v-html="escapeRandomSkillDesc(skill.desc)"></span>
        <BBadge v-if="excluded(skill)" variant="danger" class="float-end">冲突</BBadge>
        <BFormInput
          v-else-if="skill.digit"
          :id="`randsk-input-${skill.id}`"
          class="equip-ransk-var-input"
          :placeholder="`${skill.minAttr}-${skill.maxAttr}`"
          :model-value="preSkills.find((it) => it.id == skill.id)?.value"
          @click="(event: Event) => event.stopPropagation()"
        />
      </BListGroupItem>
    </BListGroup>
    <div class="p-2 d-flex align-items-center justify-content-between">
      <span :class="['equip-ransk-count ms-2', selectMax() ? 'text-danger' : 'text-light']">
        已选择词缀 {{ selectedSkills.length }}/{{ maxSkill }}
      </span>
      <BButton variant="success" size="sm" pill @click="submitResult()">
        <Icon name="ic:round-check" class="fs-5" />
      </BButton>
    </div>
  </div>
</template>

<style lang="scss">
.equip-randsk-list {
  width: 100%;
  border-radius: 0.3rem;
  background: #1a1a1aee;

  .list-group {
    height: 400px;
  }

  .excluded {
    color: #888;
    cursor: default;
    text-decoration: line-through;
  }
}

.equip-ransk-var-input {
  width: 6em;
  height: 100%;
  font-size: 0.9em;
  padding: 0;
  text-align: center;

  &::placeholder {
    color: #aaa;
  }
}
</style>
