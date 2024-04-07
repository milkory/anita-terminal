export interface Unit {
  id: number;
  name: string;
  nameEn: string;
  side: number;
  views: UnitView[];
  line: number;
  quality: Quality;

  attr: UnitAttribute;
  growth: UnitAttribute;

  homeSkills: UnitHomeSkill[];
  foods: Food[];
  skills: Skill[];
  talents: UnitTalent[];
  breakthroughs: UnitTalent[];

  birthday: string;
  gender: string;
  height: string;
  birthplace: string;
  identity: string;
  ability: string;
  resume: UnitResume[];
  files: UnitFile[];
}

export interface UnitView {
  id: number;
  name: string;
  hasState2: boolean;
}

export interface UnitAttribute {
  hp: number;
  def: number;
  atk: number;
  atkSpeed: number;
  luck: number;
  costRestore: number;
}

export interface UnitGrowth {
  hp: number;
  def: number;
  atk: number;
}

export interface UnitResume {
  des: string;
}

export class UnitAttribute {
  name: string;
  parse: (val: number) => string;
  icon?: string;
  constructor(
    name: string,
    icon?: string,
    parse: (val: number) => string = (val) => Math.floor(val).toString()
  ) {
    this.name = name;
    this.icon = icon;
    this.parse = parse;
  }
}

export class UnitGrowthAttribute extends UnitAttribute {
  grow(base: number, mul: number, level: number, trustLv: number) {
    return base + mul * (level - 1) + mul * Math.ceil(trustLv / 2);
  }
}

export const attrMap = {
  hp: new UnitGrowthAttribute('生命', 'hp'),
  atk: new UnitGrowthAttribute('攻击', 'atk'),
  def: new UnitGrowthAttribute('防御', 'def'),
  atkSpeed: new UnitAttribute('攻速'),
  costRestore: new UnitAttribute('回费', undefined, (val) => val + '/s')
};

export const growthAttrMap = {
  hp: attrMap.hp,
  atk: attrMap.atk,
  def: attrMap.def
};

export function lineLocale(line: number) {
  return ['前排', '前排', '中排', '后排'][line];
}

export function lineName(line: number) {
  return ['front', 'front', 'middle', 'back'][line];
}

export function isGrowth(attr: UnitAttribute) {
  return attr instanceof UnitGrowthAttribute;
}

export interface UnitHomeSkill {
  id: number;
  name: string;
  desc: string;
  tag: number;
  nextIndex: number;
  resonanceLv: number;
}

export function homeSkillTagLocale(tag: number) {
  return ['贸易', '产出', '家园', '其他'][tag - 1];
}

export function filterHomeSkill(skills: UnitHomeSkill[], base?: UnitHomeSkill) {
  if (!base) {
    return skills.filter((it) => it.nextIndex != -1);
  } else {
    const result = [base];
    while (base.nextIndex > 0) {
      base = skills[base.nextIndex - 1];
      result.push(base);
    }
    return result;
  }
}

export interface UnitSummary {
  id: number;
  name: string;
  quality: Quality;
  line: number;
  skill: string[];
  views: number[];
  side: number;
  online: boolean;
}

export interface Skill {
  id: number;
  name: string;
  num: number;
  desc: string;
  detailDesc: string;
  card: Card;
  leaderCond?: string;
  exSkills?: Skill[];
}

export interface Card {
  id: number;
  name: string;
  color: string;
  cost: number;
  tags: CardTag[];
  cId: number;
}

export interface CardTag {
  id: number;
  name: string;
  detail: string;
  cId: number;
}

export interface UnitTalent {
  id: number;
  name: string;
  desc: string;
  cId: number;
}

export interface UnitFile {
  id: number;
  cv1: string;
  cv2: string;
  stories: UnitStory[];
}

export interface UnitStory {
  title: string;
  unlockLevel: number;
  desc: string;
}

export function getAllTag(skills: Skill[]): CardTag[] {
  const tags: CardTag[] = [];
  for (const skill of skills) {
    const curTag = skill.card.tags.concat((skill.exSkills || []).flatMap((it) => it.card.tags));
    for (const tag of curTag) {
      if (!tags.find((it) => it.id == tag.id)) {
        tags.push(tag);
      }
    }
  }
  return tags;
}
