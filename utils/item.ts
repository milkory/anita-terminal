export type ItemType = 'equip';

export interface Item {
  id: number;
  type: ItemType;
  name: string;
  quality: Quality;
  desc: string;
  obtain: string[];
  cId: number;
}

export interface ItemSummaryList {
  equip: EquipSummary[];
}

export interface ItemSummary {
  id: number;
  name: string;
  quality: Quality;
  online: boolean;
  cId: number;
}

export interface SourceMaterial {
  id: number;
  name: string;
  quality: 'n' | 'r' | 'sr' | 'ssr' | 'ur';
  des: string;
  saleType: SaleType;
  cId: number;
}

export enum SaleType {
  NotSale,
  Sale,
  Overdue
}

export interface Food {
  id: number;
  name: string;
  energy: number;
  rewards: SourceMaterial[];
  expirationDate: number;
  letter: string;
  cId: number;
}

export interface Equipment extends Item {
  type: 'equip';
  subType: number;
  side: number;
  attr: EquipAttribute;
  growth: EquipAttribute;
  skills: Skill[];
  randomSkills: number[];
  excludeSkills: number[];
}

export interface EquipSummary extends ItemSummary {
  subType: number;
  side: number;
}

export interface EquipAttribute {
  hp: number;
  def: number;
  atk: number;
}

export const equipAttrMap = {
  hp: attrMap.hp,
  def: attrMap.def,
  atk: attrMap.atk
};

export const itemTypeMap = {
  equip: '装备'
};

export function itemTypeLocale(type: ItemType) {
  return itemTypeMap[type];
}

export function equipTypeLocale(subType: number) {
  return ['武器', '护甲', '挂件'][subType - 1];
}

export function equipSkillMax(subType: number) {
  return [4, 4, 6][subType - 1];
}

export function equipSideName(sort: number) {
  return sort < 1 ? '通用' : ['黑月', '商会', '帝国', '铁盟', '学会', '阿妮塔'][sort - 1];
}
