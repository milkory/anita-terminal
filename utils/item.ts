export interface SourceMaterial {
  id: number;
  name: string;
  quality: string;
  des: string;
  saleType: SaleType;
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
}
