"use client"

import React from 'react'
import { Product } from 'types/Product'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { addCart } from '../../store/slice/cart'
import { ShoppingCart } from 'lucide-react'
import { Button } from '../ui/button'
import { motion } from "framer-motion"
import toast from "react-hot-toast"

interface Props {
    data: Product[]
}
function ProductList({ data }: Props) {
    const dispatch = useDispatch();
    
    const handleAddProduct = (productAdd: Product, qty: number) => {
        dispatch(addCart({ product: productAdd, quantity: qty }))
        toast.success("Product Added to cart")
    }
    return (
        <main className="grid grid-cols-1 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-4 mt-8">

            {data.map((iProduct, index) => (
                <motion.div key={iProduct._id} className="space-y-2 shadow-lg py-4"
                    custom={index}
                    initial={{ x: 1000, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: index * 0.5 }}
                >
                    <Link href={`../product/${iProduct.slug}`}>
                        <div className=" w-64 h-64 mx-auto">
                            <Image
                                src={iProduct.images[0]}
                                height={250}
                                width={250}
                                alt={iProduct.name}
                            />
                        </div>
                        <div className="text-center space-y-2">
                            <div className="text-xl font-bold">{iProduct.name}</div>
                            <div>
                                {iProduct.currencySymbol}
                                {iProduct.price}
                            </div>

                        </div>
                    </Link>
                    <div className="flex justify-center mx-auto">
                        <Button onClick={() => handleAddProduct(iProduct, 1)} className="w-40 gap-2" >
                            <ShoppingCart /> Add to cart{" "}
                        </Button>
                        
                    </div>
                </motion.div>
            ))}

        </main>
    )
}

export default ProductList