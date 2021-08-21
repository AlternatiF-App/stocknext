import React from 'react'
import {DotsVerticalIcon} from '@heroicons/react/solid'
import {Link} from 'react-router-dom'

export default function CardOrders() {
    return (
        <div className="mt-6">
            <div className="font-nunito flex items-center space-x-20 ml-8">
                <span className="px-8 py-1 bg-gray-800 text-white rounded-md">In Transit</span>
                <div className="space-x-4">
                    <span className="text-sm text-gray-400">Customer</span>
                    <span className="text-sm uppercase font-bold">Tao Chen</span>
                </div>
            </div>
            <div className="mt-4 flex space-x-8">
                <div className="space-y-4">
                    <div className="font-nunito text-sm">
                        <h2 className="text-gray-400">
                            Date
                        </h2>
                        <hr/>
                        <h2>Nov, 16</h2>
                    </div>
                    <div className="font-nunito text-sm">
                        <h2 className="text-gray-400">
                            Tracking
                        </h2>
                        <hr/>
                        <h2>4759124892</h2>
                    </div>
                </div>
                <div className="w-1/4 flex space-x-4 items-center">
                    <img className="w-2/6 h-full object-cover"
                        src={`${process.env.PUBLIC_URL}/images/CHARMING.jpg`}
                    />
                    <div className="font-nunito text-sm space-y-1">
                        <h2 className="text-gray-400">Product</h2>
                        <hr className="w-16"/>
                        <h2 className="font-bold">Scarlett</h2>
                        <h2 className="text-gray-400">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        </h2>
                        <h2 className="text-gray-400">
                            Variant CHARMING
                        </h2>
                    </div>
                </div>
                <div className="font-nunito text-sm space-y-1">
                    <h2 className="text-gray-400">Delivery</h2>
                    <hr className="w-16"/>
                    <h2 className="font-bold">United Kingdom</h2>
                    <h2 className="text-gray-400">
                        193 Cole Plains 849, 65171
                    </h2>
                </div>
                <div className="flex space-x-6">
                    <div className="font-nunito text-sm">
                        <h2 className="text-gray-400">Price</h2>
                        <hr className="w-16"/>
                        <h2 className="font-bold pt-5">$150</h2>
                    </div>
                    <div className="font-nunito text-sm">
                        <h2 className="text-gray-400">Quality</h2>
                        <hr className="w-16"/>
                        <h2 className="font-bold pt-5">50</h2>
                    </div>
                    <div className="font-nunito text-sm">
                        <h2 className="text-gray-400">Action</h2>
                        <hr className="w-16 mb-4"/>
                        <Link to='/dashboard-page/track-orders/detail'>
                            <button className="font-bold bg-gray-800 text-white rounded-md px-6 py-1">
                                Track
                            </button>
                        </Link>
                    </div>
                    <DotsVerticalIcon className="h-5 w-5 cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}
