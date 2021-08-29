import React from 'react'
import {XIcon} from '@heroicons/react/solid'

export default function Download() {
    return (
        <div className="bg-gray-800 text-white flex justify-between w-1/2 rounded-md">
            <div className="w-full p-10">
                <h1 className="text-4xl text-opensans text-bold mb-4">Put Stocknext In Your Pocket</h1>
                <p className="text-nunito">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
                </p>
                <div className="flex space-x-2 mt-10">
                    <img className="w-2/5 md:w-1/3 xl:w-1/5"
                        src={`${process.env.PUBLIC_URL}/images/googleplay.png`}
                    />
                    <img className="w-2/5 md:w-1/3 xl:w-1/5"
                        src={`${process.env.PUBLIC_URL}/images/appstore.png`}
                    />
                </div>
            </div>
            <div className="my-auto flex justify-center">
                <img className="h-3/4 w-2/4 object-cover rounded-md"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.stocksy.com%2Fa%2F8fH200%2Fz0%2F544554.jpg&f=1&nofb=1"
                />
            </div>
            <div className="mt-2 mr-2">
                <XIcon className="p-2 h-10 w-10 bg-white text-black rounded-full"/>
            </div>
        </div>
    )
}