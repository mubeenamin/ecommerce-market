"use client";

import Image from "next/image";
import React from "react";
import { Product } from "types/Product";
import { Button } from "./ui/button";
import { Lock, ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addCart } from "../store/slice/cart";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import Link from "next/link";

interface Props {
  sdata: Product;
}

function Single({ sdata }: Props) {
  const dispatch = useDispatch();
  const { data } = useSession();
  const handleAddProduct = (productAdd: Product, qty: number) => {
    dispatch(addCart({ product: productAdd, quantity: qty }));
    toast.success("Product Added to cart");
  };
  return (
    <div className="mt-28">
      <div className="md:grid md:grid-cols-5">
        <div className="col-span-1 mx-auto">
          <Image
            src={sdata.images[0]}
            width={100}
            height={100}
            alt={sdata.name}
            className="bg-white"
          />{" "}
        </div>
        <div className="col-span-2">
          <Image
            src={sdata.images[0]}
            width={500}
            height={500}
            alt={sdata.name}
            className="bg-white"
          />
        </div>
        <div className="col-span-2 mx-auto space-y-5 px-2">
          <div className="text-3xl font-semibold">{sdata.name}</div>
          <div>{sdata.category}</div>

          <div className="flex mx-auto">
            {data?.user ? (
              <Button
                onClick={() => handleAddProduct(sdata, 1)}
                className="w-40 gap-2 mx-auto "
              >
                <ShoppingCart /> Add to cart{" "}
              </Button>
            ) : (
              <Link href={"/login"}>
                <Button className="w-40 gap-2 mx-auto ">
                  <Lock /> Login{" "}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single;
