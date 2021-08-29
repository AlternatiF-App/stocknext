import React from 'react'
import shopeeImg from '../assets/partner.jfif'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Section1 from '../components/landing-page/Section1'
import TopProducts from '../components/landing-page/TopProducts'
import Tagline from '../components/landing-page/Tagline'
import CardEvaluation from '../components/landing-page/card/CardEvaluation'

export default function LandingPage() {
    return (
        <div>
            <Header/>
            <section className="grid grid-cols-1 md:grid-cols-2 bg-gray-200">
                <Section1/>
            </section>
            <section className="container mx-auto mt-16">
                <div className="relative text-center mx-10 my-4 md:mx-8 md:my-6">
                    <h2 className="font-nunito font-bold text-xl lg:text-3xl xl:text-4xl 2xl:text-4xl">
                        Trusted by over 1,000,000 business worldwide customers
                    </h2>
                </div>
                <div className="container mx-auto flex space-x-2 overflow-x-auto">
                    <img
                        className="w-auto h-48 md:h-56 py-16"
                        src={shopeeImg}
                    />
                    <img
                        className="w-auto h-48 md:h-56 py-16"
                        src={shopeeImg}
                    />
                    <img
                        className="w-auto h-48 md:h-56 py-16"
                        src={shopeeImg}
                    />
                    <img
                        className="w-auto h-48 md:h-56 py-16"
                        src={shopeeImg}
                    />
                    <img
                        className="w-auto h-48 md:h-56 py-16"
                        src={shopeeImg}
                    />
                    <img
                        className="w-auto h-48 md:h-56 py-16"
                        src={shopeeImg}
                    />
                </div>
            </section>
            <section className="container mx-auto mt-16">
                <TopProducts/>
            </section>
            <section className="container mx-auto mt-16">
                <TopProducts/>
            </section>
            <section className="mt-16 mx-6 lg:mx-20">
                <Tagline/>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 mt-16 mb-16 mx-6 p-6 lg:mx-20 items-center">
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
            </section>
            <section className="mt-16 container mx-auto">
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
                    <div className="flex overflow-x-auto items-center z-50 md:-ml-20">
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
            </section>
            <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 mt-16 px-10 py-4 md:px-14 md:py-8 xl:py-20 xl:px-40">
                <div className="font-nunito text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Ready to earn?
                    </h1>
                    <p className="mt-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                    </p>
                    <button className="bg-green-600 text-white py-3 px-8 font-nunito rounded-md mt-10">
                        Get Started
                    </button>
                </div>
            </section>
            <section className="grid md:grid-cols-2 my-16 px-4 py-12 xl:px-64">
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
                    <button className="absolute rounded-md ml-48 md:ml-64 text-sm font-nunito bg-green-600 text-white py-3 px-6 md:px-7">
                        Subscribe
                    </button>
                    <input
                        className="shadow-lg py-2 pl-14 pr-36 md:pr-36 h-14 w-80 md:w-96 text-black outline-none border-2 border-green-600 rounded-md"
                    />
                </div>
            </section>
            <Footer/>
        </div>
    )
}
