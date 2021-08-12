import React from 'react'
import CardEvaluation from './card/CardEvaluation'

export default function Evaluation() {
    return (
        <div className="mt-16 container mx-auto">
            <div className="relative text-center font-nunito mb-6">
                <h1 className="text-xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold">
                    Client Evaluation
                </h1>
                <h2 className="text-base lg:text-xl xl:text-2xl 2xl:text-2xl tracking-wide">
                    Client can send their opinion about our application
                </h2>
            </div>
            <div className="flex justify-center mt-4 mx-auto">
                <img className="w-96 h-96 object-cover rounded-md hidden md:block"
                    src={`${process.env.PUBLIC_URL}/images/team.jpg`}
                />
                <div className="flex overflow-x-auto items-center z-50 -ml-20">
                    <div className="flex space-x-4">
                        <CardEvaluation/>
                        <CardEvaluation/>
                        <CardEvaluation/>
                        <CardEvaluation/>
                        <CardEvaluation/>
                        <CardEvaluation/>
                    </div>
                </div>
            </div>
        </div>
    )
}
