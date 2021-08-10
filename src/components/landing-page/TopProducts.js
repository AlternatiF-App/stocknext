import React, {useState, useEffect} from 'react'
import CardProduct from './card/CardProduct'
import jsonProducts from '../../products.json'

export default function TopProducts() {

    const [menu, setMenu] = useState(1)
    const [service, setService] = useState("top")

    function toggleMenu(menu, service){
        if(menu === 1 && service === "top"){
            setMenu(menu)
            setService(service)
        }else{
            setMenu(menu)
            setService(service)
        }
    }

    function toggleNav(menu, nav) {
        if(nav === "next" && menu >= 3){
            setMenu(3)
            setService("lowest")
        }else if(nav === "next"){
            if(menu === 1){
                setMenu(menu)
                setService("top")
            }else if(menu === 2){
                setMenu(menu)
                setService("best")
            }else if(menu === 3){
                setMenu(menu)
                setService("lowest")
            }
        }else if(nav === "prev" && menu <= 1){
            setMenu(1)
            setService("top")
        }else if(nav === "prev"){
            if(menu === 1){
                setMenu(menu)
                setService("top")
            }else if(menu === 2){
                setMenu(menu)
                setService("best")
            }else if(menu === 3){
                setMenu(menu)
                setService("lowest")
            }
        }
    }

    return (
        <div className="container mx-auto my-6">
            <div className="relative text-center font-nunito mb-6">
                <h1 className="text-2xl font-bold">
                    Top Products
                </h1>
                <h2 className="tracking-wide">
                    We source directly from multiple factories to ensure the best quality and lowest prices.
                </h2>
            </div>
            <div className="mb-6">
                <div className="flex items-center justify-between">
                    <ul className="flex space-x-1 overflow-x-auto">
                        <li onClick={() => toggleMenu(1, "top")} 
                            className={`${menu === 1 ? "border-green-500" : "border-transparent"} rounded-md border-b-2 flex justify-center  h-12 w-14 md:h-14 md:w-16`}>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                className={`${menu === 1 ? ("bg-green-500 text-white") : ("text-green-500 bg-white")} h-10 w-10 md:h-12 md:w-12 rounded-md border-2 p-2`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </li>
                        <li onClick={() => toggleMenu(2, "best")} 
                            className={`${menu === 2 ? "border-green-500" : "border-transparent"} rounded-md border-b-2 flex justify-center h-12 w-14 md:h-14 md:w-16`}>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                className={`${menu === 2 ? ("bg-green-500 text-white") : ("text-green-500 bg-white")} h-10 w-10 md:h-12 md:w-12 rounded-md border-2 p-2`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                        </li>
                        <li onClick={() => toggleMenu(3, "lowest")} 
                            className={`${menu === 3 ? "border-green-500" : "border-transparent"} rounded-md border-b-2 flex justify-center h-12 w-14 md:h-14 md:w-16`}>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                className={`${menu === 3 ? ("bg-green-500 text-white") : ("text-green-500 bg-white")} h-10 w-10 md:h-12 md:w-12 rounded-md border-2 p-2`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </li>
                    </ul>
                    <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            onClick={() => toggleNav((menu - 1), "prev")}
                            className="h-10 w-10 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white p-2 rounded-full">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            onClick={() => toggleNav((menu + 1), "next")}
                            className="h-10 w-10 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white p-2 rounded-full">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="relative flex flex-col min-w-0 w-full overflow-x-auto">
                <dic className="py-5 flex-auto">
                    <div className="block flex overflow-x-auto" role="tablist">
                        {
                            jsonProducts.filter(product => product.category === service).map(items => {
                                return(
                                    <CardProduct
                                        img={items.img}
                                        merk={items.merk}
                                        region={items.region}
                                        price={items.price}
                                        stock={items.stock}
                                        grosir={items.grosir}
                                        shipping={items.shipping}
                                    />
                                )
                            })
                        }
                    </div>
                </dic>
            </div>
        </div>
    )
}
