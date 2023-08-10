"use client"

import { Minus, Plus, ShoppingBagIcon, Trash2 } from "lucide-react"
import { Button } from "../components/ui/button"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { decrement, deleteCart, increment } from "../store/slice/cart"
import Image from "next/image"
import { Separator } from "../components/ui/separator"
import { motion } from 'framer-motion'
import getStripePromise from "../lib/stripe"
import { cartProduct } from "types/cart"
import toast from "react-hot-toast"

function Cart() {
    const cartList = useAppSelector((state) => state.cartArray.cartItems)
    const cartList2 = useAppSelector((state) => state.cartArray)
    const dispatch = useAppDispatch();
    const handleDeleteProduct = (cartItems: cartProduct, qty: number) => {
        dispatch(deleteCart({ product: cartItems, quantity: qty }))
        toast.success("Product Delete successfully")
    }
    const handleCheckOut = async () => {
        const stripe = await getStripePromise();
        const response = await fetch("api/stripe-session/", {
            method: "Post",
            headers: { "Content-Type": "application/json" },
            cache: "no-cache",
            body: JSON.stringify(cartList),
        })
        const data = await response.json();
        console.log(data)
        if (data.session) {
            stripe?.redirectToCheckout({ sessionId: data.session.id })
        }
    }
    return (
        <div className="max-w-6xl mx-auto mt-8 " >
            {
                cartList.length == 0 ? (
                    <div className="flex flex-col md:flex justify-center items-center mx-auto">
                        <div><ShoppingBagIcon className="w-48 h-48 stroke-slate-300" /></div>
                        <div className="text-6xl text-slate-300">Cart is Empty</div>
                    </div>
                ) :
                    (
                        <div className="md:flex">
                            <div className="md:basis-[70%]">
                                {
                                    cartList.map((items, index) => (
                                        <motion.div key={items._id}
                                            custom={index}
                                            initial={{ y: 1000, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 1.5, delay: index * 1 }}
                                            className="overflow-hidden">
                                            <div className="grid grid-cols-3 md:grid md:grid-cols-5 items-center">
                                                <div className="shadow-md mx-auto row-span-2 md:row-span-1"><Image src={items.images[0]} height={80} width={80} alt={items.name} /></div>
                                                <div className="md:text-xl">{items.name}</div>
                                                <div className="md:text-xl ml-6">{items.currencySymbol} {items.price}</div>
                                                <div className="text-center flex items-center gap-2 text-lg">
                                                    <Button variant={"ghost"} size="icon" className="" onClick={() => dispatch(decrement({ product: items, quantity: 1 }))}>
                                                        <Minus />
                                                    </Button>
                                                    <div className="w-10">
                                                        {items.quantity}
                                                    </div>
                                                    <Button variant={"ghost"} size="icon" className="" onClick={() => dispatch(increment({ product: items, quantity: 1 }))}>
                                                        <Plus />
                                                    </Button>
                                                </div>
                                                <Button variant={"ghost"} size="icon" className="mx-auto" onClick={() => handleDeleteProduct(items, items.quantity)}>
                                                    <Trash2 />
                                                </Button>
                                            </div>
                                            <Separator />
                                        </motion.div>
                                    )
                                    )
                                }
                            </div>
                            <div className="flex flex-col mx-auto shadow-xl w-full md:w-80 md:h-60 p-8 gap-y-8 rounded-lg border">
                                <h1 className="text-4xl text-center font-bold">Summary</h1>
                                <div className="text-2xl flex justify-between">
                                    <h1>Total</h1>
                                    <div>
                                        Rs: {cartList2.totalAmount}
                                    </div>
                                </div>
                                <div className="mx-auto">
                                    <Button onClick={handleCheckOut} variant={"outline"} className=" w-32 text-sm rounded-lg  border-2 hover:bg-purple-400 hover:text-white md:font-bold transition duration-700 ease-in-out hover:translate-y-1 hover:scale-110">
                                        Check out
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
        </div>
    )
}

export default Cart