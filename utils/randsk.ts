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
  return parseFloat(num.toFixed(5)).toString();
}

export function setRandomValue(skill: RandomSkill, val?: number) {
  let desc = skill.desc;
  if (skill.digit) {
    if (val) {
      const times = Math.ceil((val - skill.minAttr!) / skill.digit);
      desc.replace(
        '%s',
        ignoreLowDigit(within(skill.minAttr!, skill.minAttr! + times * skill.digit, skill.maxAttr!))
      );
    } else {
      const times = Math.floor(
        (Math.random() * (skill.maxAttr! - skill.minAttr! + skill.digit)) / skill.digit
      );
      desc = desc.replace('%s', ignoreLowDigit(skill.minAttr! + times * skill.digit));
    }
  }
  return {
    id: skill.id,
    desc: desc
  };
}
