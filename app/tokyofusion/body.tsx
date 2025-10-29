
"use client"
import Gallery from "./gallery";

function About() {
    return (
        <div className="flex items-center justify-around my-10">
            {/* About Us */}
            <div id="about"className="flex flex-col items-center justify-center w-[30%]">
                <h2 className="text-3xl font-bold mb-3 font-serif">
                    Welcome
                </h2>
                <p className="text-center">
                    TokyoFusion is a Japanese restaurant that aims to serve authentic Japanese food.
                    Our goal is to provide customers with fresh food and allow them to taste the true flavors
                    of Japanese food wihotu being in Japan. We serve many Japanese dishes ranging from a bowl of 
                    ramen to popular Japanese street foods
                </p>
            </div>
            
            {/* Display Food Images */}
            <div className="flex items-center justify-center gap-5 w-[50%]">  
                <div>
                    <img src="./images/food/displayItem.png"
                        className="w-[70%]"
                    />
                </div>

                <div>
                    <img src="./images/food/takoyaki.png"
                        className="w-[70%]"
                    />
                </div>
            </div>
        </div>
    );
}

function Menu() {
    return (
        <div id="menu" className="flex flex-col text-center items-center justify-center">
            <h1 className="font-bold text-4xl mb-3 md:text-5xl">Our Menu</h1>
            <h3 className="text-lg font-medium">Quality Ingredients, Tasy Meals</h3>
            <Gallery/>
        </div>
    )
}


export default function Body() {
    return (
        <div>
            <About/>
            <Menu/>
        </div>
    )
}

