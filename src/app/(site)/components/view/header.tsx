"use client"
import Link from "next/link";
import {
  navigationMenuTriggerStyle,
  
} from "../ui/navigation-menu";
import logonew from "../../../../../public/logonew.png";
import Image from "next/image";

import { MenuIcon, ShoppingCart } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

import { useAppSelector } from "../../store/hooks";
import { Category } from "types/Category";
import { ModeToggle } from "../toggle";


interface Props {
  navBarItem: Category[]
}


function Header({ navBarItem }: Props) {
  const cartItem = useAppSelector((state) => state.cartArray);
  return (
    <main className="py-2 sticky top-0 bg-inherit z-10 flex justify-between shadow-md border-b-2">
      <div className="cursor-pointer">
        <Link href={"/"} >
          <Image src={logonew} alt="logo" />
        </Link>
      </div>
      <div className="hidden md:block">
        <ul >
          <div className="flex gap-4">
            {navBarItem.map((item) => (
              <div key={item._id}>
                <Link href={`../category/${item.categoryName}`} legacyBehavior passHref className="cursor-pointer">
                  <li className={navigationMenuTriggerStyle()}>
                    {item.categoryName}
                  </li>
                </Link>

              </div>
            ))}
            <li>
              <Link href={"../category/products"} legacyBehavior passHref >
                <div className={navigationMenuTriggerStyle()}>
                  All Products
                </div>
              </Link>
            </li>
          </div>
        </ul>
      </div>
      <div className="flex space-x-3 mr-4">
      <div><ModeToggle/></div>
        <Link href={"../cart"} >
          <Button variant={"outline"} size={"icon"} className="rounded-full ">
            <ShoppingCart />
            <span className="absolute top-0 w-5 h-5 bg-red-500 rounded-full text-center text-white text-xs">
              {cartItem.totalQuantity}
            </span>
          </Button>
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
                <Link href={"../category/products"}>
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