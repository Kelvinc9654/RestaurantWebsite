
"use client"
import { useState } from "react"

type CardImage = {
    image: string;
}

function Card({ image }: CardImage) {
    return (
        <div className="object-contain w-[350px] h-72 not-md:m-5">
            <img src={image} alt="food image"
                className="w-full h-full object-cover border-2 rounded-2xl"
            />
        </div>
    );
}

export default function Gallery() {
    const [index, setIndex] = useState(0);

    const images = [
        "./images/food/gyoza.png",
        "./images/food/sashimi.png",
        "./images/food/shoyuRamen.png",
        "./images/food/takoyaki.png",
        "./images/food/tempura.png",
        "./images/food/udon.png"
    ]

    const moveLeft = () => {
        setIndex(pIndex => (pIndex === 0 ? images.length - 3 : pIndex - 1));
    }

    const moveRight = () => {
        setIndex(pIndex => (pIndex + 3 >= images.length ? 0 : pIndex + 1));
    }

    const currentDisplayedImages = images.slice(index, index + 3);
    return (
        <div className="mx-auto py-10">
            {/* image gallery */}
            <div className="flex flex-row justify-around space-x-2 overflow-hidden not-md:flex-col">
                {
                    currentDisplayedImages.map((image, idx) => (
                        <Card key={idx} image={image}/>
                    ))
                }
            </div>

            {/* arrow buttons */}
            <div className="flex items-center justify-around mt-5">
                <button onClick={moveLeft}
                    className="border-2 rounded-full w-10 h-10 cursor-pointer hover:bg-red-50"
            >
                {'<'}
            </button>

                <button onClick={moveRight}
                        className="border-2 rounded-full w-10 h-10 cursor-pointer hover:bg-red-50"
                >
                    {'>'}
                </button>
            </div>
        </div>
    );
}