import React from 'react'
import {DotsVerticalIcon} from '@heroicons/react/solid'

export default function CardInOrder() {
    return (
        <div className="mt-6 py-4 px-2">
            <div className="font-nunito text-sm items-center flex px-20">
                <span className="bg-gray-800 text-white rounded-md py-2 px-6">
                    In Transit
                </span>
                <div className="text-sm flex space-x-2 ml-20">
                    <h2 className="font-nunito text-gray-400">Customer</h2>
                    <h2 className="text-opensans font-bold">TAO CHEN</h2>
                </div>
            </div>
            <div className="flex pt-4">
                <div className="flex justify-between px-10 w-1/4">
                    <div className="font-nunito text-sm">
                        <h2 className="text-gray-400">
                            Date
                        </h2>
                        <hr/>
                        <h2>
                            Nov, 16
                        </h2>
                    </div>
                    <div className="font-nunito text-sm text-right">
                        <h2 className="text-gray-400">
                            Tracking
                        </h2>
                        <hr/>
                        <h2>
                            4759124892
                        </h2>
                    </div>
                </div>
                <div className="w-1/4 flex space-x-4 items-center">
                    <img className="w-1/4"
                        src={`${process.env.PUBLIC_URL}/images/CHARMING.jpg`}
                    />
                    <div className="font-nunito text-sm space-y-2">
                        <h2 className="text-gray-400">Product</h2>
                        <hr className="w-16"/>
                        <h2 className="font-bold">Scarlett</h2>
                        <h2 className="text-gray-400">Variant Charming</h2>
                    </div>
                </div>
                <div className="w-1/4 flex justify-around items-center">
                    <div className="font-nunito text-sm">
                        <h2 className="text-gray-400">Price</h2>
                        <hr/>
                        <h2 className="font-bold pt-4">$150</h2>
                    </div>
                    <div className="font-nunito text-sm">
                        <h2 className="text-gray-400">quality</h2>
                        <hr/>
                        <h2 className="font-bold pt-4">50</h2>
                    </div>
                </div>
                <div className="w-1/4 flex space-x-4">
                    <div className="flex items-center">
                        <button className="bg-gray-800 text-white rounded-md py-2 px-6">
                            Available
                        </button>
                    </div>
                    <DotsVerticalIcon className="h-5 w-5 cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}
