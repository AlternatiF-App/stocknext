import React from 'react'

export default function Download() {
    return (
        <>
            <div className="hidden md:block">
                <img className="w-3/4 h-3/4 shadow-2xl mx-auto object-cover rounded-md"
                    src={`${process.env.PUBLIC_URL}/images/subscribe-banner.png`}
                />
            </div>
            <div className="relative text-center md:text-right font-nunito space-y-2">
                <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">
                    Put <span className="text-green-600">Stocknext </span>
                    <span className="md:block">in You Pocket</span>
                </h1>
                <p className="text-sm md:text-base lg:text-base 2xl:text-lg">
                    Our application is designed for Android and Apple and you can find our application in googleplay and appstore.
                </p>
                <div className="flex space-x-2 justify-center md:justify-end">
                    <img className="w-2/5 md:w-1/3 xl:w-1/5"
                        src={`${process.env.PUBLIC_URL}/images/googleplay.png`}
                    />
                    <img className="w-2/5 md:w-1/3 xl:w-1/5"
                        src={`${process.env.PUBLIC_URL}/images/appstore.png`}
                    />
                </div>
            </div>
        </>
    )
}
