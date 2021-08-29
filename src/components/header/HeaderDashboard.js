import React from 'react'
import {SearchIcon} from '@heroicons/react/solid'

export default function HeaderDashboard() {
    return (
        <nav className="w-full py-4 flex justify-between">
            <div className="flex space-x-1 w-1/2">
                <input placeholder="Search for products services"
                    className="h-10 w-2/6 outline-none rounded-md px-3 py-2 shadow-lg"
                />
                <button className="bg-green-600 text-white flex items-center h-10 px-3 py-2 rounded-md">
                    <SearchIcon className="h-5 w-5 mr-3"/> Search
                </button>    
            </div>
            <div className="w-1/2">
                <ul className="flex justify-end gap-8 font-nunito font-sm">
                    <li className="border-b-2 hover:border-green-600 transition duration-300 ease-in-out">Dashboard</li>
                    <li className="border-b-2 hover:border-green-600 transition duration-300 ease-in-out">Wallet</li>
                    <li className="border-b-2 hover:border-green-600 transition duration-300 ease-in-out">Help Center</li>
                </ul>
            </div>
        </nav>
    )
}
