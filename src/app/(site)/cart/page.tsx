"use client"

import { useAppDispatch, useAppSelector } from "../store/hooks"
import cart, { deleteCart } from "../store/slice/cart"





function Cart() {
    const cartList = useAppSelector((state)=>state.cartArray)
    
    return (
        <div>{cartList.map((items)=>(
            <div key={items._id}>{items.name}</div>
        ))}</div>
    )
}

export default Cart