"use client"

import Image from 'next/image'
import React from 'react'
import { Product } from 'types/Product'
import { Button } from './ui/button'
import { ShoppingCart } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { addCart } from '../store/slice/cart'
import toast from 'react-hot-toast'

interface Props {
    data: Product
}

function Single({ data }: Props) {
    const dispatch = useDispatch();
    
    const handleAddProduct = (productAdd: Product, qty: number) => {
        dispatch(addCart({ product: productAdd, quantity: qty }))
        toast.success("Product Added to cart")
    }
    return (
        <div className='mt-28'>
            <div className='md:grid md:grid-cols-5'>
                <div className='col-span-1 mx-auto'><Image src={data.images[0]} width={100} height={100} alt={data.name} /> </div>
                <div className='col-span-2' >
                    <Image src={data.images[0]} width={500} height={500} alt={data.name} />
                </div>
                <div className='col-span-2 mx-auto space-y-5 px-2'>
                    <div className='text-3xl font-semibold'>{data.name}</div>
                    <div>{data.category}</div>

                    <div className='flex mx-auto'>
                    <Button onClick={()=>handleAddProduct(data,1)} className="w-40 gap-2 mx-auto" >
                        <ShoppingCart /> Add to cart{" "}
                    </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Single