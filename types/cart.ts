import { Product } from "./Product";


export type cartProduct={
    _id: string;
    createdAt?: Date;
    name: string;
    slug: string;
    category:string;
    currencySymbol:string;
    quantity:number;
    price:number;
    images:string[];

}

export type cart={
    cartItems:cartProduct[],
    totalQuantity:number,
    totalAmount:number,
}
