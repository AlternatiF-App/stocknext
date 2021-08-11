import React from 'react'

export default function Join() {
    return (
        <div className="bg-blue-900 text-white flex-row md:flex justify-between my-16 px-4 py-12 xl:px-64">
            <div className="font-nunito">
                <h1 className="text-4xl md:text-6xl font-bold mb-2">
                    Join Our Newsletter
                </h1>
                <span>Just insert your email into the field below. And you will get the updates from us.</span>
            </div>
            <div className="flex items-center mt-8 sm:mt-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-900 absolute ml-5 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <button className="absolute rounded-md ml-52 md:ml-44 lg:ml-64 text-sm font-nunito bg-blue-900 py-3 px-6">
                    Subscribe
                </button>
                <input
                    className="py-2 px-4 pl-14 pr-36 h-14 w-full text-black outline-none rounded-md"
                />
            </div>
        </div>
    )
}
