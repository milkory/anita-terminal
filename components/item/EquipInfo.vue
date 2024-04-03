<script setup lang="ts">
defineProps<{
  data: Equipment;
}>();

const level = ref(1);
</script>

<template>
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
        词缀数量 1/{{ equipSkillMax(data.subType) }}
      </div>
    </div>
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-11 ps-2 ps-md-2 fs-small">
        <ul class="ms-md-4 mb-0">
          <li v-for="skill in data.skills" :key="skill.id" v-html="skill.desc"></li>
        </ul>
      </div>
    </div>
  </BCard>
</template>

<style>
.equip-attr-icon {
  display: inline-block;
  width: 1.2em;
  vertical-align: 0.1em;
}
</style>
