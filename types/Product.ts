export type Product = {
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  category:string;
  currencySymbol:string;
  price:number;
  images:string[];
};
