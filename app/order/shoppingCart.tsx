
"use client"

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

type CardObject = {
    image: string;
    name: string;
    price: number;
    quantity: number;
    handleQuantityChange: (change: number) => void;
}

function Header() {
    const router = useRouter();

    return (
        <div className="flex flex-row items-center bg-gray-800 h-25">
            {/* Logo */}
            <div>
                <img src="./images/other/logo.png"
                    className="h-15 w-auto object-contain"
                />
            </div>

            {/* Restuarant Name */}
            <div>
                <h1 className="text-white font-bold text-2xl mx-5 cursor-pointer"
                    onClick={() => router.push("/tokyofusion")}>
                    TokyoFusion
                </h1>
            </div>
        </div>
    );
}


function ItemCard({ image, name, price, quantity, handleQuantityChange }: CardObject) {

    return (
        <div className="flex flex-row items-center bg-white shadow-md rounded-lg p-4 w-[80%] my-5 not-md:flex-col">

            {/* Card Image */}
            <div className="overflow-hidden w-60 h-60 rounded-md">
                <img src={image} alt="food image" className="w-full h-full object-cover"/>
            </div>

            {/* Image Description */}
            <div className="flex flex-row items-center ml-6 w-[50%]">
                {/* name */}
                <h2 className="text-lg text-red-500 font-bold">{name}</h2>

                {/* Price and Buttons */}
                <div className="flex flex-col justify-center items-center ml-5">
                    {/* Price */}
                    <h2 className="text-lg font-bold">{price.toFixed(2)}</h2>

                    {/* buttons */}
                    <div className="flex flex-row items-center px-3 py-1 space-x-3">
                        <button className="text-xl cursor-pointer hover:bg-gray-200 border border-solid border-black h-8 w-8 
                                        rounded-full text-center font-bold"
                                onClick={() => handleQuantityChange(-1)}
                        >
                            -
                        </button>

                        <h3 className="font-bold">{quantity}</h3>

                        <button className="text-xl cursor-pointer hover:bg-gray-200 border border-solid border-black h-8 w-8 
                                        rounded-full text-center font-bold"
                                onClick={() => handleQuantityChange(1)}
                        >
                            +
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

function OrderDisplay() {
    const [foodItems, setFoodItems] = useState([
        { image: "./images/food/gyoza.png", name: "Gyoza", price: 7.00, quantity: 0 },
        { image: "./images/food/matchaIcecream.png", name: "Matcha Icecream", price: 10.00, quantity: 0 },
        { image: "./images/food/sashimi.png", name: "Sashimi", price: 8.00, quantity: 0 },
        { image: "./images/food/shoyuRamen.png", name: "Shoyu Ramen", price: 15.00, quantity: 0 },
        { image: "./images/food/soba.png", name: "Soba", price: 14.00, quantity: 0 },
        { image: "./images/food/takoyaki.png", name: "Takoyaki", price: 7.50, quantity: 0 },
        { image: "./images/food/tempura.png", name: "Tempura", price: 4.50, quantity: 0 },
        { image: "./images/food/tonkatsuRamen.png", name: "Tonkatsu Ramen", price: 15.00, quantity: 0 },
        { image: "./images/food/udon.png", name: "Udon", price: 14.50, quantity: 0 },
        { image: "./images/food/wagyuBeef.png", name: "Wagyu Beef", price: 8.50, quantity: 0 },
    ]);

    function handleQuantityChange(change: number, idx: number) {
        setFoodItems(prevFoodItems => {
            return prevFoodItems.map((item, index) => {
                if (index === idx) {
                    const newQuantity = item.quantity + change;

                    return {...item, quantity: newQuantity >= 0? newQuantity : 0};
                }
                return item;
            })
        })
    }

    let subtotal = 0;
    foodItems.forEach((foodItem, index) => {
        subtotal += foodItem.quantity * foodItem.price;
    });

    const tax = subtotal * 0.08875;
    const total = subtotal + tax;

    return (
        <div className="flex flex-col justify-center items-start gap-10 px-5 py-12 bg-gray-100 lg:flex-row">
            {/* Items to Order */}
            <div className="w-full">
                <h1 className="text-3xl font-bold mb-5 border-b-4 inline-block border-red-400">
                    Your Order
                </h1>

                {
                    foodItems.map((foodItem, idx) => (
                        <ItemCard 
                            key={idx} 
                            image={foodItem.image} 
                            name={foodItem.name} 
                            price={foodItem.price} 
                            quantity={foodItem.quantity} 
                            handleQuantityChange={(change) => handleQuantityChange(change, idx)}
                        />
                    ))
                }
            </div>
            
            {/* Summary */}
            <div className="flex flex-col w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-6 sticky top-0">
                <h1 className="text-2xl text-center font-bold mb-6">Order Summary</h1>

                <div className="flex flex-row justify-between">
                    <h2>Subtotal: </h2>
                    <h2>${subtotal.toFixed(2)}</h2>
                </div>

                <ul className="list-disc ml-5 mb-5">
                    {
                        foodItems.map((foodItem, idx) => 
                            (foodItem.quantity > 0) ? 
                                (
                                    <li key={idx}>
                                        {foodItem.name}: ${foodItem.price.toFixed(2)} ({foodItem.quantity})
                                    </li>
                            ) : null
                        )
                    }
                </ul>

                <div className="flex flex-row justify-between">
                    {/* 8.875 */}
                    <h2>Tax & Fees: </h2>
                    <h2>${tax.toFixed(2)}</h2>
                </div>

                <div className="flex flex-row justify-between text-lg pt-3 border-t">
                    <h2>Total: </h2>
                    <h2>${total.toFixed(2)}</h2>
                </div>

                <button className="w-full mt-8 text-white py-3 rounded-full font-bold text-lg bg-red-500 cursor-pointer hover:bg-red-600">
                    Continue to Checkout
                </button>
            </div>
        </div>
    );
}


export default function ShoppingCart() {
    return (
        <div>
            <Header/>
            <OrderDisplay/>
        </div>
    )
}