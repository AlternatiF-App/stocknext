import React from 'react'
import shopeeImg from '../../assets/partner.jfif'

export default function Partner() {
    return (
        <div className="container mx-auto mt-8">
            <div className="relative text-center">
                <h2 className="font-nunito font-bold text-3xl">
                    Trusted by over 1,000,000 business worldwide customers
                </h2>
            </div>
            <div className="container mx-auto flex space-x-2 overflow-x-auto">
                <img
                    className="w-1/6 py-16"
                    src={shopeeImg}
                />
                <img
                    className="w-1/6 py-16"
                    src={shopeeImg}
                />
                <img
                    className="w-1/6 py-16"
                    src={shopeeImg}
                />
                <img
                    className="w-1/6 py-16"
                    src={shopeeImg}
                />
                <img
                    className="w-1/6 py-16"
                    src={shopeeImg}
                />
                <img
                    className="w-1/6 py-16"
                    src={shopeeImg}
                />
                <img
                    className="w-1/6 py-16"
                    src={shopeeImg}
                />
                <img
                    className="w-1/6 py-16"
                    src={shopeeImg}
                />
            </div>
        </div>
    )
}
