import React from 'react'

export default function Download() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mt-16 mb-16 mx-6 p-6 lg:mx-20 items-center">
            <div className="hidden md:block">
                <img className="w-4/5 h-4/5 shadow-2xl mx-auto object-cover rounded-md"
                    src={`${process.env.PUBLIC_URL}/images/subscribe-banner.png`}
                />
            </div>
            <div className="relative text-center md:text-right font-nunito space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">
                    Put <span className="text-green-500">Stocknext</span> in You Pocket
                </h1>
                <p className="text-sm">
                    Our application is designed for Android and Apple and you can find our application in googleplay and appstore.
                </p>
                <div className="flex space-x-2 justify-center md:justify-end">
                    <img className="w-1/4"
                        src={`${process.env.PUBLIC_URL}/images/googleplay.png`}
                    />
                    <img className="w-1/4"
                        src={`${process.env.PUBLIC_URL}/images/appstore.png`}
                    />
                </div>
            </div>
        </div>
    )
}
