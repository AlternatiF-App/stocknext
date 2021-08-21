import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function Sidebar() {

    let param = useParams()
    // const counter = useSelector((state) => state.counter)

    const [active, setActive] = useState(1)

    const toggleActive = (index) => {
        setActive(index)
    }

    return (
        <nav className="bg-white w-1/6 h-screen flex justify-center fixed top-0 left-0 overflow-y-auto">
            <div className="flex flex-col w-full px-6 py-4">
                <div className="font-nunito text-3xl font-bold tracking-wide">
                    <Link to="/">
                        <h1>stock<span className="text-green-600">next</span></h1>
                    </Link>
                </div>
                <ul className="space-y-4 mt-8 font-nunito font-bold text-xl">
                    <Link to={`/dashboard-page/${param.page}`}>
                        <li onClick={() => toggleActive(1)}
                            className={`${active === 1 && ("bg-green-600 text-white")} flex px-4 py-4 rounded-md`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Orders
                        </li>
                    </Link>
                    <Link to={`/dashboard-page/${param.page}`}>
                        <li onClick={() => toggleActive(2)}
                            className={`${active === 2 && ("bg-green-600 text-white")} flex px-4 py-4 rounded-md`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Track Orders
                        </li>
                    </Link>
                    <li onClick={() => toggleActive(3)}
                        className={`${active === 3 && ("bg-green-600 text-white")} flex px-4 py-4 rounded-md`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Products
                    </li>
                    <li onClick={() => toggleActive(4)}
                        className={`${active === 4 && ("bg-green-600 text-white")} flex px-4 py-4 rounded-md`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Import List
                    </li>
                    <li onClick={() => toggleActive(5)}
                        className={`${active === 5 && ("bg-green-600 text-white")} flex px-4 py-4 rounded-md`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Store
                    </li>
                    <li onClick={() => toggleActive(6)}
                        className={`${active === 6 && ("bg-green-600 text-white")} flex px-4 py-4 rounded-md`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Post Requests
                    </li>
                    <li onClick={() => toggleActive(7)}
                        className={`${active === 7 && ("bg-green-600 text-white")} flex px-4 py-4 rounded-md`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Report
                    </li>
                    <li onClick={() => toggleActive(8)}
                        className={`${active === 8 && ("bg-green-600 text-white")} flex px-4 py-4 rounded-md`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Invoices
                    </li>
                </ul>
            </div>
        </nav>
    )
}
