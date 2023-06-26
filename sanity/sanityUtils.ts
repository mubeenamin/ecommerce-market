import { createClient, groq } from "next-sanity";
import { Product } from "../types/Product";
import { client } from "./lib/client";
import { Hero } from "../types/Hero";
import { Banners } from "../types/Banners";
import { Category } from "../types/Category";

export async function getProducts(): Promise<Product[]> {
  const res = await client.fetch(groq`*[_type=="products"]{
        _id,
        _createAt,
        name,
        price,
        "slug": slug.current,
        "category": category->categoryName,
        "currencySymbol": currency->symbol,
        "images": images->productImages[].asset->url
               
  }`);
  return res;
}
export async function getMobile(): Promise<Product[]> {
  const res = await client.fetch(groq`*[_type=="products" && category->categoryName=="Mobiles Phones"]{
        _id,
        _createAt,
        name,
        price,
        "slug": slug.current,
        "category": category->categoryName,
        "currencySymbol": currency->symbol,
        "images": images->productImages[].asset->url
               
  }`);
  return res;
}
export async function getLaptop(): Promise<Product[]> {
  const res = await client.fetch(groq`*[_type=="products" && category->categoryName=="Laptop & Tablets"]{
        _id,
        _createAt,
        name,
        price,
        "slug": slug.current,
        "category": category->categoryName,
        "currencySymbol": currency->symbol,
        "images": images->productImages[].asset->url
               
  }`);
  return res;
}
export async function getAccessories(): Promise<Product[]> {
  const res = await client.fetch(groq`*[_type=="products" && category->categoryName=="Accessories"]{
        _id,
        _createAt,
        name,
        price,
        "slug": slug.current,
        "category": category->categoryName,
        "currencySymbol": currency->symbol,
        "images": images->productImages[].asset->url
               
  }`);
  return res;
}

export async function getHeroSection(): Promise<Hero[]> {
  const res = await client.fetch(groq`*[_type=="heroSection"]{
        _id,
        _createAt,
        heroSectionText,
        "heroSectionImages":heroSectionImages[].asset->url,
        content
        
  }`);
  return res;
}
export async function getBanners(): Promise<Banners[]> {
  const res = await client.fetch(groq`*[_type=="banners"]{
    _id,
    _createAt,
    bannerName,
    "bannerImages":bannerImages[].asset->url
    
}`);
  return res;
}
export async function getCategory(): Promise<Category[]> {
  const res = await client.fetch(groq`*[_type=="category"]{
        _id,
        _createAt,
        categoryName,
        link,
        "categoryImages": categoryImages.asset->url
        
  }`);
  return res;
}
export async function getProduct(slug: string): Promise<Product[]> {
  const res = await client.fetch(groq`*[_type=="products" && slug.current == $slug][0]{
        _id,
        _createAt,
        name,
        price,
        "slug": slug.current,
        "category": category->categoryName,
        "currencySymbol": currency->symbol,
        "images": images->productImages[].asset->url
               
  }`, { slug });
  return res;
}



