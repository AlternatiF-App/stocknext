import React from 'react'

export default function Earn() {
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 mt-16 bg-yellow-50 px-10 py-4 md:px-14 md:py-8 xl:py-20 xl:px-40">
            <div className="font-nunito text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold">
                    Ready to earn?
                </h1>
                <p className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                </p>
                <button className="bg-blue-900 text-white py-3 px-8 font-nunito rounded-md mt-10">
                    Get Started
                </button>
            </div>
        </div>
    )
}
