import React from 'react'
import Header from '../header/HeaderDashboard'
import TabMenu from './TabMenu'
import Download from './card/Download'
import Statistic from './card/Statistic'

export default function Orders() {
    return (
        <div className="bg-gray-200 w-5/6 h-full overflow-y-auto fixed top-0 right-0 px-6">
            <Header/>
            <div className="py-8">
                <span className="font-nunito text-base text-gray-500">Hi, John Deo</span>
                <h1 className="font-opensans text-4xl font-bold">Dropshipper Portal</h1>
            </div>
            <div className="flex justify-around">
                <Download/>
                <div className="w-1/4 relative items-center font-nunito p-10">
                    <Statistic/>
                </div>
                <div className="w-1/4 relative items-center font-nunito p-10">
                    <Statistic/>
                </div>
            </div>
            <div className="mt-10 flex">
                <div className="w-3/4">
                    <TabMenu/>
                </div>
                <div className="w-1/4 space-y-10">
                    <Statistic/>
                    <Statistic/>
                    <Statistic/>
                </div>
            </div>
        </div>
    )
}
