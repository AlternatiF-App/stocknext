import React, {useState} from 'react'

export default function TabMenuDetail() {

    const [active, setActive] = useState(1)

    const toggleActive = (index) => {
        setActive(index)
    }

    return (
        <>
            <ul className="font-nunito text-sm uppercase flex space-x-8">
                <li onClick={() => toggleActive(1)}
                    className={`${active === 1 ? ("border-b-2 border-gray-800 text-gray-800") : ("text-gray-400")}`}>
                    Overview
                </li>
                <li onClick={() => toggleActive(2)}
                    className={`${active === 2 ? ("border-b-2 border-gray-800 text-gray-800") : ("text-gray-400")}`}>
                    descriptions
                </li>
                <li onClick={() => toggleActive(3)}
                    className={`${active === 3 ? ("border-b-2 border-gray-800 text-gray-800") : ("text-gray-400")}`}>
                    About the seller
                </li>
                <li onClick={() => toggleActive(4)}
                    className={`${active === 4 ? ("border-b-2 border-gray-800 text-gray-800") : ("text-gray-400")}`}>
                    Packages
                </li>
                <li onClick={() => toggleActive(5)}
                    className={`${active === 5 ? ("border-b-2 border-gray-800 text-gray-800") : ("text-gray-400")}`}>
                    FAQ
                </li>
                <li onClick={() => toggleActive(6)}
                    className={`${active === 6 ? ("border-b-2 border-gray-800 text-gray-800") : ("text-gray-400")}`}>
                    Reviews
                </li>
            </ul>
        </>
    )
}
