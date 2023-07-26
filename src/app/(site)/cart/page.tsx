"use client"

import { Delete, DeleteIcon, Minus, Plus, ShoppingBagIcon, Trash2 } from "lucide-react"
import { Button } from "../components/ui/button"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import cart, { decrement, deleteCart, increment } from "../store/slice/cart"
import Image from "next/image"
import { Separator } from "../components/ui/separator"


// onClick={() => dispatch(deleteCart(items._id))}


function Cart() {
    const cartList = useAppSelector((state) => state.cartArray)
    const dispatch = useAppDispatch();

    return (
        <div className="max-w-6xl mx-auto mt-8 " >
            {
                cartList.cartItems.length == 0 ? (
                    <div className="flex flex-col md:flex justify-center items-center mx-auto">
                        <div><ShoppingBagIcon className="w-48 h-48 stroke-slate-300" /></div>
                        <div className="text-6xl text-slate-300">Cart is Empty</div>
                    </div>
                ) :
                    (
                        <div className="md:flex">
                            <div className="md:basis-[70%]">
                                {
                                    cartList.cartItems.map((items) => (
                                        <div key={items._id} >
                                            <div className="grid grid-cols-3 md:grid md:grid-cols-5 items-center">
                                                <div className="shadow-md mx-auto row-span-2 md:row-span-1"><Image src={items.images[0]} height={80} width={80} alt={items.name} /></div>
                                                <div className="md:text-xl">{items.name}</div>
                                                <div className="md:text-xl ml-6">{items.currencySymbol} {items.price}</div>
                                                <div className="text-center flex items-center gap-2 text-lg">
                                                <Button variant={"ghost"} size="icon" className="" onClick={()=>dispatch(decrement({product:items,quantity:1}))}>
                                                    <Minus />
                                                </Button>
                                                <div className="w-10">
                                                    {items.quantity}
                                                </div>
                                                <Button variant={"ghost"} size="icon" className="" onClick={()=>dispatch(increment({product:items,quantity:1}))}>
                                                    <Plus />
                                                </Button>
                                                </div>
                                                <Button variant={"ghost"} size="icon" className="mx-auto" onClick={()=>dispatch(deleteCart({product:items, quantity:items.quantity}))}>
                                                    <Trash2 />
                                                </Button>
                                            </div>
                                            <Separator />
                                        </div>

                                    )
                                    )
                                }
                            </div>
                            <div className="flex flex-col mx-auto shadow-xl w-full md:w-80 md:h-60 p-8 gap-y-8 rounded-lg">
                                <h1 className="text-4xl text-center font-bold">Summary</h1>
                                <div className="text-2xl flex justify-between">
                                    <h1>Total</h1>
                                    <div>
                                        Rs: {cartList.totalAmount}
                                    </div>
                                </div>
                                <div className="mx-auto">
                                    <Button variant={"outline"} className=" w-32 text-sm rounded-lg  border-2 hover:bg-purple-400 hover:text-white md:font-bold transition duration-700 ease-in-out hover:translate-y-1 hover:scale-110">
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