import React, {useState} from 'react'
import Header from '../header/HeaderDashboard'
import {FilterIcon, ChevronDownIcon} from '@heroicons/react/solid'
import CardProduct from './card/CardProduct'
import jsonProducts from '../../products.json'

export default function Products() {

    const [menu, setMenu] = useState(false)
    const [service, setService] = useState("")

    const toggleActive = (service) => {
        if(menu === false){
            setMenu(true)
            setService(service)
        }else{
            setMenu(false)
        }
    }

    return (
        <div className="bg-gray-200 w-5/6 h-full overflow-y-auto fixed top-0 right-0 px-6">
            <Header/>
            <div className="pt-8">
                <div className="flex items-center space-x-2 mb-4">
                    <FilterIcon className="w-6 h-6 text-gray-500"/>
                    <span className="font-nunito text-sm text-gray-500">Filter</span>
                </div>
                <div className="flex items-center space-x-6">
                    <button onClick={() => toggleActive("category")} className="text-gray-500 font-nunito text-sm flex items-center">
                        Categories <ChevronDownIcon className="h-5 w-5 ml-2"/>
                    </button>   
                    <button onClick={() => toggleActive("shipping")} className="text-gray-500 font-nunito text-sm flex items-center">
                        Shipping Origin <ChevronDownIcon className="h-5 w-5 ml-2"/>
                    </button>   
                    <button onClick={() => toggleActive("price")} className="text-gray-500 font-nunito text-sm flex items-center">
                        Price Range <ChevronDownIcon className="h-5 w-5 ml-2"/>
                    </button>   
                </div>
                <div>
                    {
                        menu === true && service === "category" ? <DropdownCategory/> :
                            menu === true && service === "shipping" ? <DropdownShipping/> :
                                menu === true && service === "price" ? <DropdownPrice/> :
                                    null
                    }
                </div>
            </div>
            <div className="grid grid-cols-4 gap-8 mt-8">
                {
                    jsonProducts.map(items => {
                        return(
                            <CardProduct
                                id={items.id}
                                key={items.id}
                                img={items.img}
                                merk={items.merk}
                                price={items.price}
                                stock={items.stock}
                                grosir={items.grosir}
                                shipping={items.shipping}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}


const DropdownCategory = () => {
    return (
        <div className="bg-white w-1/12 fixed rounded-md mt-2">
            <div className="px-4 py-2">
                <ul className="font-nunito text-sm space-y-2">
                    <li>Lipstic</li>
                    <li>Lipstic</li>
                    <li>Lipstic</li>
                    <li>Lipstic</li>
                    <li>Lipstic</li>
                </ul>
            </div>
        </div>
    )
}
const DropdownShipping = () => {
    return (
        <div className="bg-white w-1/12 fixed rounded-md  mt-2">
            <div className="px-4 py-2">
                <ul className="font-nunito text-sm space-y-2">
                    <li>Indonesian</li>
                    <li>Indonesian</li>
                    <li>Indonesian</li>
                    <li>Indonesian</li>
                    <li>Indonesian</li>
                </ul>
            </div>
        </div>
    )
}
const DropdownPrice = () => {
    return (
        <div className="bg-white w-1/12 fixed rounded-md  mt-2">
            <div className="px-4 py-2">
                <ul className="font-nunito text-sm space-y-2">
                    <li>$1 - $10</li>
                    <li>$10 - $100</li>
                    <li>$100 - $1000</li>
                </ul>
            </div>
        </div>
    )
}