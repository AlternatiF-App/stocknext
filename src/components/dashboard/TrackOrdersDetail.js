import React from 'react'
import Navbar from '../header/HeaderDashboard'
import {ArchiveIcon} from '@heroicons/react/solid'
import jsonProducts from '../../products.json'

export default function TrackOrdersDetail(props) {

    const { id } = props.match.params
    const {
        region
    } = jsonProducts[id-1]

    console.log("data", jsonProducts[id])

    return (
        <div className="bg-gray-200 w-5/6 h-full overflow-y-auto fixed top-0 right-0 px-6">
            <Navbar/>
            <div className="flex w-4/5 py-8">
                <div>
                    <span className="font-nunito text-base text-gray-500">Hi, John Deo</span>
                    <h1 className="font-opensans my-2 text-4xl font-bold">Track Order</h1>
                    <p className="font-nunito text-sm text-gray-500">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                    </p>
                </div>
            </div>
            <div className="flex w-4/5 mt-8">
                <div className="px-8 w-full">
                    <span className="font-nunito text-base text-gray-500">Estimated Delivery Nov, 18 2021</span>
                    <div className="mt-4 flex justify-between">
                        <div>
                            <div className="flex justify-center mb-4">
                                <div className="bg-green-600 h-16 w-16 rounded-full flex justify-center items-center">
                                    <ArchiveIcon className="h-6 w-6 text-white" fill="currentColor"/>
                                </div>
                            </div>
                            <span className="font-nunito text-gray-500">Ready to Dispatch</span>
                        </div>
                        <div>
                            <div className="flex justify-center mb-4">
                                <div className="bg-green-600 h-16 w-16 rounded-full flex justify-center items-center">
                                    <ArchiveIcon className="h-6 w-6 text-white" fill="currentColor"/>
                                </div>
                            </div>
                            <span className="font-nunito text-gray-500">Ready to Dispatch</span>
                        </div>
                        <div>
                            <div className="flex justify-center mb-4">
                                <div className="bg-green-600 h-16 w-16 rounded-full flex justify-center items-center">
                                    <ArchiveIcon className="h-6 w-6 text-white" fill="currentColor"/>
                                </div>
                            </div>
                            <span className="font-nunito text-gray-500">Ready to Dispatch</span>
                        </div>
                        <div>
                            <div className="flex justify-center mb-4">
                                <div className="bg-gray-400 h-16 w-16 rounded-full flex justify-center items-center">
                                    <ArchiveIcon className="h-6 w-6 text-black" fill="currentColor"/>
                                </div>
                            </div>
                            <span className="font-nunito text-gray-500">Ready to Dispatch</span>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <span className="font-opensans text-2xl font-bold block">Delivering</span>
                    <span className="font-opensans text-2xl font-bold">to {region}</span>
                </div>
            </div>
        </div>
    )
}
