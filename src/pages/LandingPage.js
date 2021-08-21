import React from 'react'
import Navbar from '../components/header/Header'
import Section1 from '../components/landing-page/Section1'
import Partner from '../components/landing-page/Partner'
import TopProducts from '../components/landing-page/TopProducts'
import TopServices from '../components/landing-page/TopServices'
import Tagline from '../components/landing-page/Tagline'
import Download from '../components/landing-page/Download'
import Evaluation from '../components/landing-page/Evaluation'
import Footer from '../components/footer/Footer'

export default function LandingPage() {
    return (
        <div>
            <Navbar/>
            <section className="grid grid-cols-1 md:grid-cols-2 bg-gray-200">
                <Section1/>
            </section>
            <section className="container mx-auto mt-16">
                <Partner/>
            </section>
            <section className="container mx-auto mt-16">
                <TopProducts/>
            </section>
            <section className="container mx-auto mt-16">
                <TopServices/>
            </section>
            <section className="mt-16 mx-6 lg:mx-20">
                <Tagline/>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 mt-16 mb-16 mx-6 p-6 lg:mx-20 items-center">
                <Download/>
            </section>
            <section className="mt-16 container mx-auto">
                <Evaluation/>
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
