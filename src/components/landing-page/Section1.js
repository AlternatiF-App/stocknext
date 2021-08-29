import React from 'react'
import pic from '../../assets/bg-section.png'
import {SearchIcon} from '@heroicons/react/solid'

export default function Section1() {
    return (
        <>
            <div className="py-8 md:py-14 mx-6 lg:mx-20 font-nunito">
                <h2 className="text-gray-500 font-extrabold">stocknext</h2>
                <h1 className="text-6xl lg:text-7xl xl:text-8xl 2xl:font-8xl font-bold my-2">
                    START <span className="text-green-500">SELLING</span> ONLINE FOR <span className="text-green-500">FREE</span>
                </h1>
                <p className="font-base mb-2">
                    Stocknext allow you to choose the best product to sell from thousand dropshipping suppliers all over the world.
                </p>
                <div className="flex h-10">
                    <input placeholder="Enter keywords"
                        className="px-4 py-2 rounded-md outline-none w-full md:w-6/12 lg:w-9/12 xl:w-7/12 2xl:w-5/12"
                    />
                    <button className="bg-green-500 text-white rounded-md p-4">
                        <SearchIcon className="h-3 w-3" />
                    </button>
                </div>
            </div>
            <div className="hidden md:block">
                <img className="w-4/6 h-4/6 my-40 mx-auto object-cover"
                    src={pic}
                />
            </div>
        </>
    )
}