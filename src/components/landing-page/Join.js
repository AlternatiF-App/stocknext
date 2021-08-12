import React from 'react'

export default function Join() {
    return (
        <div className="grid md:grid-cols-2 my-16 px-4 py-12 xl:px-64">
            <div className="font-nunito">
                <h1 className="text-2xl md:text-4xl font-bold mb-2">
                    Join Our Newsletter
                </h1>
                <span className="text-sm md:text-base">Just insert your email into the field below. And you will get the updates from us.</span>
            </div>
            <div className="flex items-center mx-auto mt-8 sm:mt-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600 absolute ml-5 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <button className="absolute rounded-md ml-52 md:ml-64 text-sm font-nunito bg-green-600 text-white py-3 px-6 md:px-7">
                    Subscribe
                </button>
                <input
                    className="shadow-lg py-2 pl-14 pr-32 md:pr-36 h-14 w-full md:w-96 text-black outline-none border-2 border-green-600 rounded-md"
                />
            </div>
        </div>
    )
}
