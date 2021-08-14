import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Statistic from './Statistic'
import TabMenu from './TabMenu'
import CardInOrder from './card/CardInOrder'
import Download from './card/Downloads'

export default function Dashboard() {
    return (
        <div>
            <Sidebar/>
            <div className="bg-white w-5/6 h-full overflow-y-auto fixed top-0 right-0">
                <Navbar/>
                <div className="font-nunito px-4 py-8">
                    <span className="text-base text-gray-500">Hi, John Deo</span>
                    <h1 className="text-4xl font-bold">Dropshipper Portal</h1>
                </div>
                <div className="flex justify-around px-4">
                    <Download/>
                    <div className="w-1/4 relative items-center font-nunito p-10">
                        <Statistic/>
                    </div>
                    <div className="w-1/4 relative items-center font-nunito p-10">
                        <Statistic/>
                    </div>
                </div>
                <div className="mt-10 px-4 flex">
                    <div className="w-3/4">
                        <TabMenu/>
                        <div className="my-10">
                            <CardInOrder/>
                            <CardInOrder/>
                            <CardInOrder/>
                            <CardInOrder/>
                            <CardInOrder/>
                            <CardInOrder/>
                        </div>
                    </div>
                    <div className="w-1/4">
                        <Statistic/>
                        <Statistic/>
                        <Statistic/>
                    </div>
                </div>
            </div>
        </div>
    )
}
