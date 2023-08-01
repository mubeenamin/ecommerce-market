import { NextRequest, NextResponse } from "next/server";

import Stripe from "stripe";
import { Product } from "types/Product";
import { cart, cartProduct } from "types/cart";

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
    apiVersion: "2022-11-15"

});

export async function POST(request: NextRequest) {
    const body = await request.json();
    console.log(body)


    try {
        if (body.length > 0) {
            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create({
                submit_type: 'pay',
                mode: 'payment',
                payment_method_types: ['card'],
                billing_address_collection: 'auto',
                shipping_options: [{ shipping_rate: "shr_1NaGtMGNRzr7IjY1z2Kg0UaW" }],
                line_items: body.map((item: cartProduct) => {
                    return {
                        price_data: {
                            currency: "pkr",
                            product_data: {
                                name: item.name,
                            },
                            unit_amount: item.price * 100,
                        },
                        quantity: item.quantity,
                        adjustable_quantity: {
                            enabled: true,
                            minimum: 1,
                            maximum: 10,
                        },
                    }
                }),
                success_url: `${request.headers.get("origin")}/?success=true`,
                cancel_url: `${request.headers.get("origin")}/?canceled=true`,
            });
            return NextResponse.json({ session })
        }
        else {
            return NextResponse.json("no-data found");
        }
    }
    catch (err: any) {
        return NextResponse.json(err.message);
    }

}


