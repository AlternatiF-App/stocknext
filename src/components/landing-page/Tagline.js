import React from 'react'

export default function Tagline() {
    return (
        <>
            <div className="font-nunito text-center container mx-auto">
                <h1 className="text-xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold">
                    Step into different world
                </h1>
                <span className="my-2 mx-12 md:mx-auto text-base lg:text-xl xl:text-2xl 2xl:text-2xl tracking-wide">
                    We have many kind of cosmetic type that you need. Just choose your best brand and add to cart and checkout or you need discussion with our specialist?.
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 mb-6 p-6 items-center">
                <div className="space-y-10 mx-6 lg:mx-20">
                    <div className='block md:flex'>
                        <div className="flex justify-center md:block mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-8 md:w-8 xl:h-10 xl:w-10 2xl:h-14 2xl:w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                            </svg>
                        </div>
                        <div className="ml-0 md:ml-2 md:text-base lg:text-lg xl:text-2xl 2xl:text-5xl font-nunito w-full">
                            <h1 className="font-extrabold leading-none relative md:text-left text-center">
                                <span className="sm:block">A one of a kind </span>
                                <span className="sm:block"> community</span>
                            </h1>
                            <div className="text-xs xl:text-sm 2xl:text-xl mt-2 md:block relative md:text-left text-center">
                                BeautyGems is a global online marketplace, where people come together to make sell, buy and
                                collect unique items.
                            </div>
                        </div>
                    </div>
                    <div className='block md:flex'>
                        <div className="flex justify-center md:block mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-8 md:w-8 xl:h-10 xl:w-10 2xl:h-14 2xl:w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </div>
                        <div className="ml-0 md:ml-2 md:text-base lg:text-lg xl:text-2xl 2xl:text-5xl font-nunito w-full">
                            <h1 className="font-extrabold leading-none relative md:text-left text-center">
                                <span className="sm:block">Peace of </span>
                                <span className="sm:block"> mind</span>
                            </h1>
                            <div className="text-xs xl:text-sm 2xl:text-xl mt-2 md:block relative md:text-left text-center">
                                Your privacy is the highest priority of our dedicated team. And if you ever need assistance
                                we are always ready to step in for support.
                            </div>
                        </div>
                    </div>
                    <div className='block md:flex'>
                        <div className="flex justify-center md:block mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-8 md:w-8 xl:h-10 xl:w-10 2xl:h-14 2xl:w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="ml-0 md:ml-2 md:text-base lg:text-lg xl:text-2xl 2xl:text-5xl font-nunito w-full">
                            <h1 className="font-extrabold leading-none relative md:text-left text-center">
                                <span className="sm:block">Support </span>
                                <span className="sm:block"> independent creators</span>
                            </h1>
                            <div className="text-xs xl:text-sm 2xl:text-xl mt-2 md:block relative md:text-left text-center">
                                Ther is no beautygems warehouse - just millions of people selling the things they love. We make the
                                whole proces easy, helping you connect directly with makers to find something extraordinary.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block">
                    <img className="md:w-2/3 md:h-4/5 lg:w-1/2 lg:h-3/5 xl:w-1/2 xl:h-3/5 mx-auto object-cover rounded-md"
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.stocksy.com%2Fa%2F8fH200%2Fz0%2F544554.jpg&f=1&nofb=1"
                    />
                </div>
            </div>
        </>
    )
}