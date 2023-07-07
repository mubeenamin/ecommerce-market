"use client";
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

import { getCategory } from "../../../../sanity/sanityUtils";
import Image from "next/image";
import HamBurgerMenu from "./hamburgerMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

export default async function NavBar() {
  const data = await getCategory();

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
            {data.map((item) => (
              <NavigationMenuItem key={item._id}>
                <Link href={item.link} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.categoryName}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger asChild><Button variant="outline"><MenuIcon /></Button></SheetTrigger>
          <SheetContent>
            <ul className="space-y-8">
              {
                data.map((idata) => (
                  <div key={idata._id}>
                    <Link href={idata.link}>
                      <SheetClose asChild>
                        <li>{idata.categoryName}</li>
                      </SheetClose>
                    </Link>
                  </div>
                ))
              }</ul>
          </SheetContent>
        </Sheet>

      </div>
    </main>
  );
}
