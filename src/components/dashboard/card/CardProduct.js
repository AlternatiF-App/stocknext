import React from 'react'
import {Link} from 'react-router-dom'

export default function CardProduct(props) {

    let {
        id,
        img,
        merk,
        price,
        stock,
        grosir,
        shipping
    } = props

    return (
        <div className="group">
            <Link to={`/dashboard/products/${id}`}>
                <img className="rounded-md"
                    src={`${process.env.PUBLIC_URL+img}`}
                />
            </Link>
            <div className="px-8 py-4">
                <span className="font-nunito text-xl font-bold leading-none">
                    {merk}
                </span>
                <div className="grid grid-cols-2 mt-4 px-1">
                    <div className="grid grid-row font-nunito text-xs font-bold">
                        <span className="text-gray-400">Price USD</span>
                        <span className="text-black">${price}</span>
                    </div>
                    <div className="grid grid-row font-nunito text-xs font-bold text-right">
                        <span className="text-gray-400">Stocks</span>
                        <span className="text-black">{stock} pcs</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 mt-2 px-1">
                    <div className="grid grid-row font-nunito text-xs font-bold">
                        <span className="text-gray-400">Shipping Price</span>
                        <span className="text-black">${grosir}</span>
                    </div>
                    <div className="grid grid-row font-nunito text-xs font-bold text-right">
                        <span className="text-gray-400">Shipping Time</span>
                        <span className="text-black">{shipping} Days</span>
                    </div>
                </div>
                <div className="group-hover:block hidden mt-4 px-1">
                    <button className="bg-green-500 text-white font-nunito text-bold text-base py-4 rounded-md w-full">
                        Add to import list
                    </button>
                </div>
                <div className="group-hover:hidden block mt-20 px-1"/>
            </div>
        </div>
    )
}
