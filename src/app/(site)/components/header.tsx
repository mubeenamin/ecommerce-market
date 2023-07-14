"use client"
import Link from "next/link";
import {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import logonew from "../../../../public/logonew.png";
import Image from "next/image";

import { MenuIcon, ShoppingCart } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

import { useAppSelector } from "../store/hooks";
import { Category } from "types/Category";


interface Props{
    navBarItem:Category[]
}


function Header({navBarItem}:Props) {
    const cartItem = useAppSelector((state) => state.cartArray);
  return (
    <main className="py-2 sticky top-0 bg-inherit z-10 flex justify-between">
        <div className="cursor-pointer">
          <Link href={"/"}>
            <Image src={logonew} alt="logo" />
          </Link>
        </div>
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {navBarItem.map((item) => (
                <NavigationMenuItem key={item._id}>
                  <Link href={`../category/${item.categoryName}`} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {item.categoryName}
                    </NavigationMenuLink>
                  </Link>

                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <Link href={"../category/products"} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    All Products
                  </NavigationMenuLink>
                </Link></NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
            <Link href={"../cart"}>
        <button className="relative p-3 rounded-full bg-slate-200 ">
            <ShoppingCart />
            <span className="absolute top-0 w-5 h-5 bg-red-500 rounded-full text-center text-white text-xs">
              {cartItem.length}
            </span>
          </button>
          </Link>
        </div>
        
        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger asChild><Button variant="outline"><MenuIcon /></Button></SheetTrigger>
            <SheetContent>
              <ul className="space-y-8">
                {
                  navBarItem.map((idata) => (
                    <div key={idata._id}>
                      <Link href={`../category/${idata.categoryName}`}>
                        <SheetClose asChild>
                          <li>{idata.categoryName}</li>
                        </SheetClose>
                      </Link>
                    </div>
                  ))
                }
                <div>
                  <Link href="../category/products">
                    <SheetClose asChild>
                      <li>All Products</li>
                    </SheetClose>
                  </Link>
                </div>
              </ul>
            </SheetContent>
          </Sheet>

        </div>
      </main>
  )
}

export default Header