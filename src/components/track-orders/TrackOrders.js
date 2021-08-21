import React from 'react'
import Navbar from '../dashboard/Navbar'
import CardOrders from './card/CardOrders'

export default function TrackOrders() {
    return (
        <div className="bg-gray-200 w-5/6 h-full overflow-y-auto fixed top-0 right-0 px-6">
            <Navbar/>
            <div className="py-8">
                <span className="font-nunito text-base text-gray-500">Hi, John Deo</span>
                <h1 className="font-opensans text-4xl font-bold">Track Order</h1>
                <p className="text-sm font-nunito">
                    Please enter your tracking number or numbers, make sure you enter each tracking number at one line.
                </p>
            </div>
            <div className="flex w-1/2 mt-6">
                <input placeholder="Input numbers"
                    className="h-10 w-2/6 outline-none rounded-md px-3 py-2 shadow-lg"
                />
                <button className="bg-green-600 text-white flex items-center h-10 px-6 py-2 rounded-md">
                    Track
                </button>    
            </div>
            <div className="mt-6">
                <h1 className="font-opensans text-4xl font-bold">All Current Orders</h1>
                <div>
                    <CardOrders/>
                    <CardOrders/>
                    <CardOrders/>
                    <CardOrders/>
                    <CardOrders/>
                </div>
            </div>
        </div>
    )
}
