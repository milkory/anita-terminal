export interface Unit {
  id: number;
  name: string;
  nameEn: string;
  side: UnitSide;
  views: UnitView[];
  line: number;
  quality: string;

  attr: UnitAttribute;
  growth: UnitAttribute;

  birthday: string;
  gender: string;
  height: string;
  birthplace: string;
  identity: string;
  ability: string;
  resume: UnitResume[];
}

export interface UnitView {
  id: number;
  name: string;
  hasState2: boolean;
}

export interface UnitSide {
  sort: number;
  name: string;
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
    return base + mul * (level - 1) + mul * Math.floor(trustLv / 2);
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

export function lineLocale(unit: Unit) {
  return ['前排', '前排', '中排', '后排'][unit.line];
}

export function lineName(unit: Unit) {
  return ['front', 'front', 'middle', 'back'][unit.line];
}
