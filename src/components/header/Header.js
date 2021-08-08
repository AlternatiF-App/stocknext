import React, {useState} from 'react'

export default function Header() {

    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        if(menu === false){
            setMenu(true)
        }else{
            setMenu(false)
        }
    }

    return (
        <div className="bg-white bg-opacity-70 py-4 px-6 md:px-14 lg:px-16 xl:px-20 2xl:px-24 flex justify-between">
            <div className="font-nunito text-3xl font-bold tracking-wide">
                <h1>stock<span className="text-green-600">next</span></h1>
            </div>
            <div className="hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex justify-end w-full">
                <ul className="flex items-center lg:gap-6 xl:gap-8 2xl:gap-10 text-gray-500 hover:text-green-600">
                    <li className="font-nunito font-sm border-b-2 hover:border-green-600 transition duration-300 ease-in-out">Home</li>
                    <li className="font-nunito font-sm border-b-2 hover:border-green-600 transition duration-300 ease-in-out">Browse</li>
                    <li className="font-nunito font-sm border-b-2 hover:border-green-600 transition duration-300 ease-in-out">Source More</li>
                    <li className="font-nunito font-sm border-b-2 hover:border-green-600 transition duration-300 ease-in-out">Our Service</li>
                    <li className="font-nunito font-sm border-b-2 hover:border-green-600 transition duration-300 ease-in-out">Login</li>
                    <li className="font-nunito font-sm border-b-2 hover:border-green-600 transition duration-300 ease-in-out">Register</li>
                    <li className="bg-green-600 text-white px-4 py-2 rounded-md">
                        Post Request
                    </li>
                </ul>
            </div>
            <div onClick={() => toggleMenu()} className="flex sm:flex md:flex lg:hidden xl:hidden 2xl:hidden items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            {
                menu === true && <div className="relative z-50 transition duration-150 ease-out" onClick={() => toggleMenu()}>
                    <dvi className="fixed inset-0 bg-gray-800 opacity-25 transition duration-150 ease-in"></dvi>
                    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm p-6 bg-white border-r overflow-y-auto ">
                        <div className="flex justify-between items-center font-nunito text-3xl mb-10 font-bold">
                            <h1>stock<span className="text-green-600">next</span></h1>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div>
                            <ul className="space-y-4">
                                <li className="font-nunito font-sm">Home</li>
                                <li className="font-nunito font-sm">Browse</li>
                                <li className="font-nunito font-sm">Source More</li>
                                <li className="font-nunito font-sm">Our Service</li>
                                <li className="font-nunito font-sm">Login</li>
                                <li className="font-nunito font-sm">Register</li>
                            </ul>
                        </div>
                        <div className="mt-auto">
                            <div>
                                <a className="block text-center bg-green-600 text-white px-3 py-3 rounded-md">Post Request</a>
                            </div>
                        </div>
                    </nav>
                </div>
            }
        </div>
    )
}
