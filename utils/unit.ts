export interface Unit {
  id: number;
  name: string;
  nameEn: string;
  side: UnitSide;
  views: UnitView[];
  line: number;
  quality: string;
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

export function lineLocale(unit: Unit) {
  return ['前排', '前排', '中排', '后排'][unit.line];
}

export function lineName(unit: Unit) {
  return ['front', 'front', 'middle', 'back'][unit.line];
}
