
"use client";

import { useRouter } from "next/navigation";

function NavigationBar() {
    const router = useRouter();

    return (
      <header className="bg-white shadow-md top-0 left-0 w-full">
        {/* navbar */}
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto ">

          {/* logo */}
          <div className="flex items-center space-x-2">
              <img src="./images/other/logo.png" alt="tokyofusion logo"
                  className="h-12 w-auto object-contain"
                />
          </div>

          {/* navigation */}
          <ul className="flex items-center space-x-8 text-gray-700 font-medium not-md:flex-col">
              <li>
                <a href="#home" className="hover:text-red-600 hover:underline">Home</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-red-600 hover:underline">Menu</a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-600 hover:underline">About Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-600 hover:underline">Contact</a>
              </li>
          </ul>

          {/* buttons */}
          <div className="flex items-center">
            <button className="ml-6 bg-red-600 text-white px-5 py-2 rounded-full font-bold
                                hover:bg-red-700 cursor-pointer"
            >
              Reservation
            </button>

            <button className="ml-6 bg-red-600 text-white px-5 py-2 rounded-full font-bold
                                hover:bg-red-700 cursor-pointer"
                    onClick={() => router.push("/order")}
            >
              Order Now
            </button>
          </div>

        </div>

      </header>
    )
}

function Banner() {

  return(
    <div>
      <img src="./images/other/banner.png"
          className="w-full"
      />
    </div>
  )
}

export default function Header() {
    return (
        <div id="home">
            <NavigationBar/>
            <Banner/>
        </div>
    )
}


