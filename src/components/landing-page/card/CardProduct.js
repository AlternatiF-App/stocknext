import React from 'react'

export default function CardProduct(props) {

    let {
        img,
        merk,
        region,
        price,
        stock,
        grosir,
        shipping
    } = props

    return (
        <div>
            <div className="group container rounded-md border-2 hover:border-green-500 w-52 mx-1 my-2 py-2 px-1 bg-white">
                <div className="w-11/12 mx-auto mb-4">
                    <img className="rounded-md"
                        src={`${process.env.PUBLIC_URL+img}`}
                    />
                </div>
                <div className="space-y-2 font-nunito text-xs font-bold px-1">
                    <h2>{merk}</h2>
                    <span>From <span className="text-green-500">{region}</span></span>
                </div>
                <div className="grid grid-cols-2 mt-4 px-1">
                    <div className="grid grid-row font-nunito text-xs font-bold">
                        <span className="text-gray-400">Price USD</span>
                        <span className="text-black">${price}</span>
                    </div>
                    <div className="grid grid-row font-nunito text-xs font-bold text-right">
                        <span className="text-gray-400">Stocks</span>
                        <span className="text-black">{stock}</span>
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
                    <button className="bg-green-500 text-white font-nunito text-bold text-xs p-2 rounded-md w-full">
                        Add to import list
                    </button>
                </div>
                <div className="group-hover:hidden block mt-12 px-1"/>
            </div>
        </div>
    )
}
