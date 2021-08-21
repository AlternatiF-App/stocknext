import React, {useState} from 'react'
import CardInOrder from './card/CardInOrder'

export default function TabMenu() {

    const [active, setActive] = useState(1)

    const toggleActive = (index) => {
        setActive(index)
    }

    return (
        <div>
            <div className="flex justify-between shadow-lg">
                <div>
                    <ul className="font-nunito text-sm uppercase flex space-x-8">
                        <li onClick={() => toggleActive(1)}
                            className={`${active === 1 ? ("border-b-2 border-gray-800 text-gray-800") : ("text-gray-400")}`}>
                            to orders
                        </li>
                        <li onClick={() => toggleActive(2)}
                            className={`${active === 2 ? ("border-b-2 border-gray-800 text-gray-800") : ("text-gray-400")}`}>
                            priority
                        </li>
                        <li onClick={() => toggleActive(3)}
                            className={`${active === 3 ? ("border-b-2 border-gray-800 text-gray-800") : ("text-gray-400")}`}>
                            new
                        </li>
                        <li onClick={() => toggleActive(4)}
                            className={`${active === 4 ? ("border-b-2 border-gray-800 text-gray-800") : ("text-gray-400")}`}>
                            delivered
                        </li>
                        <li onClick={() => toggleActive(5)}
                            className={`${active === 5 ? ("border-b-2 border-gray-800 text-gray-800") : ("text-gray-400")}`}>
                            completed
                        </li>
                        <li onClick={() => toggleActive(6)}
                            className={`${active === 6 ? ("border-b-2 border-gray-800 text-gray-800") : ("text-gray-400")}`}>
                            canceled
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="font-nunito text-sm flex space-x-8 items-center">
                        <li>Export Shipped</li>
                        <li className="bg-green-600 text-white py-2 px-4 rounded-md">Import Order</li>
                    </ul>
                </div>
            </div>
            {
                active === 1 && 
                    <div className="my-10">
                        <CardInOrder/>
                        <CardInOrder/>
                        <CardInOrder/>
                        <CardInOrder/>
                        <CardInOrder/>
                        <CardInOrder/>
                    </div>
            }
        </div>
    )
}
