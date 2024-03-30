export interface SourceMaterial {
  id: number;
  name: string;
  quality: string;
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
