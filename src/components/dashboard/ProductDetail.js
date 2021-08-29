import React, {useState} from 'react'
import Navbar from '../header/HeaderDashboard'
import TabMenuDetail from './TabMenuDetail'
import {ChevronRightIcon, PlusIcon} from '@heroicons/react/solid'

export default function ProductDetail() {

    const [push, setPush] = useState(false)

    const togglePush = () => {
        if(push === false){
            setPush(true)
        }else{
            setPush(false)
        }
    }

    return (
        <div className="bg-gray-200 w-5/6 h-full overflow-y-auto fixed top-0 right-0 px-6">
            <Navbar/>
            <div className="my-8">
                <TabMenuDetail/>
            </div>
            <div className="grid grid-cols-3 gap-6">
                <div className="grid grid-cols-5 gap-4">
                    <div className="grid grid-rows-6 gap-4">
                        <img className="w-full rounded-md"
                            src={`${process.env.PUBLIC_URL}/images/CHARMING.jpg`}
                        />
                        <img className="w-full rounded-md"
                            src={`${process.env.PUBLIC_URL}/images/CHARMING.jpg`}
                        />
                        <img className="w-full rounded-md"
                            src={`${process.env.PUBLIC_URL}/images/CHARMING.jpg`}
                        />
                        <img className="w-full rounded-md"
                            src={`${process.env.PUBLIC_URL}/images/CHARMING.jpg`}
                        />
                    </div>
                    <div className="col-span-4">
                        <img className="w-full h-full object-cover rounded-md"
                            src={`${process.env.PUBLIC_URL}/images/CHARMING.jpg`}
                        />
                    </div>
                </div>
                <div>
                    <h1 className="font-opensans text-5xl font-extrabold">Scarlett</h1>
                    <p className="font-nunito text-sm text-gray-400 mt-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                    </p>
                    <div className="font-nunito">
                        <h4 className="text-base font-semibold uppercase">Price</h4>
                        <h2 className="font-extrabold text-xl">$25.00 ~ $50.00</h2>
                    </div>
                    <div className="font-nunito mt-4">
                        <h4 className="text-base font-semibold uppercase">Stock</h4>
                        <h2 className="text-sm text-gray-400">90000 pcs in stock</h2>
                    </div>
                    <div className="font-nunito mt-4 space-y-2">
                        <h4 className="text-base font-semibold uppercase">Variants</h4>
                        <div className="flex space-x-2">
                            <div className="h-6 w-6 rounded-full bg-pink-500"/>
                            <div className="h-6 w-6 rounded-full bg-purple-500"/>
                            <div className="h-6 w-6 rounded-full bg-yellow-200"/>
                            <div className="h-6 w-6 rounded-full bg-yellow-500"/>
                            <div className="h-6 w-6 rounded-full bg-pink-200"/>
                        </div>
                    </div>
                    <div className="font-nunito mt-4 space-y-2">
                        <h4 className="text-base font-semibold uppercase">Weight</h4>
                        <div className="flex space-x-4">
                            <div className="h-10 w-10 rounded-full border border-black font-nunito text-sm">
                                <spam className="flex justify-center items-center h-10">90</spam>
                            </div>
                            <div className="h-10 w-10 rounded-full border border-black font-nunito text-sm">
                                <spam className="flex justify-center items-center h-10">100</spam>
                            </div>
                            <div className="h-10 w-10 rounded-full border border-black font-nunito text-sm">
                                <spam className="flex justify-center items-center h-10">200</spam>
                            </div>
                        </div>
                    </div>
                    <div className="font-nunito mt-4 flex items-center space-x-4">
                        <h4 className="text-base font-semibold">Orders/day</h4>
                        <input type="text" className="h-8 px-2 py-1 outline-none shadow-xl" placeholder="1"/>
                    </div>
                    <div className="flex space-x-4 mt-8">
                        <button onClick={() => togglePush()} className="flex w-2/5 h-10 bg-green-500 text-white items-center justify-center font-nunito text-sm rounded-md uppercase">
                            <ChevronRightIcon className="h-10 w-4 mr-2"/>Push Now
                        </button>
                        <button className="flex w-2/5 h-10 border-2 border-black items-center justify-center font-nunito text-sm rounded-md">
                            Add to list
                        </button>
                    </div>
                </div>
                <div>
                    <div>
                        <h4 className="font-nunito text-base font-semibold mb-4">Product Rating</h4>
                        <div className="flex items-center space-x-6">
                            <h4 className="font-nunito text-xs">Quality</h4>
                            <div>
                                <div className="absolute bg-gray-500 h-1 w-56 rounded-full"/>
                                <div className="absolute bg-yellow-400 h-1 w-48 rounded-full"/>
                            </div>
                        </div>
                        <div className="flex items-center space-x-6">
                            <h4 className="font-nunito text-xs">Quality</h4>
                            <div>
                                <div className="absolute bg-gray-500 h-1 w-56 rounded-full"/>
                                <div className="absolute bg-yellow-400 h-1 w-36 rounded-full"/>
                            </div>
                        </div>
                        <div className="flex items-center space-x-6">
                            <h4 className="font-nunito text-xs">Quality</h4>
                            <div>
                                <div className="absolute bg-gray-500 h-1 w-56 rounded-full"/>
                                <div className="absolute bg-yellow-400 h-1 w-40 rounded-full"/>
                            </div>
                        </div>
                        <div className="flex items-center space-x-6">
                            <h4 className="font-nunito text-xs">Quality</h4>
                            <div>
                                <div className="absolute bg-gray-500 h-1 w-56 rounded-full"/>
                                <div className="absolute bg-yellow-400 h-1 w-44 rounded-full"/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h4 className="font-nunito text-base font-semibold mb-4">Have some custom request</h4>
                        <button className="flex w-2/5 h-10 bg-gray-800 text-white items-center justify-center font-nunito text-sm rounded-md">
                            Generate Request<ChevronRightIcon className="h-10 w-4 ml-2"/>
                        </button>
                    </div>
                    <div className="mt-8">
                        <h4 className="font-nunito text-base font-semibold mb-4">Shipping Details</h4>
                        <div className="flex space-x-2">
                            <div className="font-nunito text-sm text-gray-400 space-y-2">
                                <h4 className="">Ships from</h4>
                                <h4 className="">Ships to</h4>
                                <h4 className="">Carried</h4>
                            </div>
                            <div className="font-nunito text-sm text-gray-400 space-y-2">
                                <h4 className="">Indonesian</h4>
                                <h4 className="">Singapore</h4>
                                <h4 className="">10</h4>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="flex space-x-16">
                            <div className="font-nunito text-base font-bold">
                                <h4>Costs</h4>
                            </div>
                            <div className="font-nunito text-base font-bold">
                                <h4>$12.00</h4>
                            </div>
                        </div>
                        <h4 className="font-nunito text-base font-bold">
                            Delivery Time 6 Days
                        </h4>
                    </div>
                    <div className="mt-8">
                        <h4 className="font-nunito text-gray-400 text-base font-semibold mb-4">
                            Do you want to test sample?
                        </h4>
                        <button className="flex w-2/5 h-10 bg-green-600 text-white items-center justify-around font-nunito text-sm rounded-md">
                            Buy Sample<ChevronRightIcon className="h-10 w-4"/>
                        </button>
                    </div>
                </div>
            </div>
            {
                push === true && <div className="relative z-50 transition duration-150 ease-out">
                    <div className="fixed inset-0 bg-gray-800 opacity-60 transition duration-150 ease-in" onClick={() => togglePush()}></div>
                    <div className="fixed top-48 bottom-48 right-1/4 flex flex-col rounded-md w-5/6 max-w-2xl p-6 bg-white">
                        <h4 className="font-nunito text-2xl font-semibold mb-4">
                            Push Product
                        </h4>
                        <div className="flex space-x-4">
                            <img className="w-1/5 rounded-md"
                                src={`${process.env.PUBLIC_URL}/images/CHARMING.jpg`}
                            />
                            <div>
                                <h2 className="font-opensans text-4xl font-semibold">
                                    Scarlett
                                </h2>
                                <h4 className="font-nunito text-sm font-semibold uppercase mt-4">Price</h4>
                                <h2 className="font-nunito text-base text-gray-400 mt-2">$25.00 ~ $50.00</h2>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h4 className="font-nunito text-2xl font-semibold mb-4">
                                Select Store
                            </h4>
                            <div className="space-y-4">
                                <input placeholder="Select Store" className="h-10 w-full px-2 outline-none border border-gray-500 rounded-md" />
                                <input placeholder="Wordpres Store" className="h-10 w-full px-2 outline-none border border-gray-500 rounded-md" />
                            </div>
                        </div>
                        <div className="mt-auto flex items-center">
                            <PlusIcon className="h-6 w-6 p-1 border-2 border-black rounded-full mr-4"/>
                            <h4 className="font-nunito text-xl font-semibold">
                                Select Store
                            </h4>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
