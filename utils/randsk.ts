export interface RandomSkillSet {
  id: number;
  name: string;
  skills: RandomSkill[];
}

export interface RandomSkill {
  id: number;
  desc: string;
  minAttr?: number;
  maxAttr?: number;
  digit?: number;
  value?: number;
}

const randomSkillCaches = new Map<number, RandomSkillSet>();

export async function getRandomSkillSet(id: number) {
  const cache = randomSkillCaches.get(id);
  if (cache) return cache;
  const skills = await $fetch<RandomSkillSet>('/api/randsk', { query: { id: id } });
  randomSkillCaches.set(id, skills);
  return skills;
}

export function escapeRandomSkillDesc(desc: string) {
  return desc.replace('%s', '<span class="fw-bold text-primary">X</span>');
}

function within(min: number, num: number, max: number) {
  return Math.min(Math.max(min, num), max);
}

function ignoreLowDigit(num: number) {
  return parseFloat(num.toFixed(5));
}

export function setRandomValue(skill: RandomSkill, val?: number) {
  console.log(skill, val);
  let desc = skill.desc;
  let value;
  if (skill.digit) {
    if (val) {
      const times = Math.round((val - skill.minAttr!) / skill.digit);
      value = ignoreLowDigit(
        within(skill.minAttr!, skill.minAttr! + times * skill.digit, skill.maxAttr!)
      );
      desc = desc.replace('%s', value.toString());
    } else {
      const times = Math.floor(
        (Math.random() * (skill.maxAttr! * 100 - skill.minAttr! * 100 + skill.digit * 100)) /
          (skill.digit * 100)
      );
      value = ignoreLowDigit(
        within(skill.minAttr!, skill.minAttr! + times * skill.digit, skill.maxAttr!)
      );
      desc = desc.replace('%s', value.toString());
    }
  }
  return {
    ...skill,
    ...{
      desc: desc,
      value: value
    }
  };
}
