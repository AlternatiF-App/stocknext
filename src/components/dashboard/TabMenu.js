import React from 'react'

export default function TabMenu() {
    return (
        <div className="flex justify-between">
            <div>
                <ul className="font-nunito text-sm uppercase flex space-x-8 text-gray-800">
                    <li className="border-b-2 hover:border-gray-800 transition duration-300 ease-in-out">to orders</li>
                    <li className="border-b-2 hover:border-gray-800 transition duration-300 ease-in-out">priority</li>
                    <li className="border-b-2 hover:border-gray-800 transition duration-300 ease-in-out">new</li>
                    <li className="border-b-2 hover:border-gray-800 transition duration-300 ease-in-out">delivered</li>
                    <li className="border-b-2 hover:border-gray-800 transition duration-300 ease-in-out">completed</li>
                    <li className="border-b-2 hover:border-gray-800 transition duration-300 ease-in-out">canceled</li>
                </ul>
            </div>
            <div>
                <ul className="font-nunito text-sm flex space-x-8 items-center">
                    <li>Export Shipped</li>
                    <li className="bg-green-600 text-white py-2 px-4 rounded-md">Import Order</li>
                </ul>
            </div>
        </div>
    )
}
