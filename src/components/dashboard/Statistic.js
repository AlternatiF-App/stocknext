import React from 'react'
import {PresentationChartLineIcon, ArrowUpIcon, TrendingUpIcon} from '@heroicons/react/solid'

export default function Statistic() {
    return (
        <>
        <h2 className="text-2xl font-bold text-center">All Orders</h2>
        <h1 className="text-8xl font-bold text-center my-4">08</h1>
        <div className="flex items-center">
            <PresentationChartLineIcon className="h-12 w-12 text-black" fill="none" stroke="currentColor"/>
            <span className="text-xs text-gray-400">Update your payout method in Settings</span>
        </div>
        <div className="flex justify-between mt-2">
            <span className="text-red-600">+2.5%</span>
            <div className="flex gap-2">
                <ArrowUpIcon className="h-5 w-5 text-gray-400" fill="currentColor"/>
                <span>This month</span>
            </div>
            <TrendingUpIcon className="h-5 w-5 text-green-600" fill="currentColor"/>
        </div>   
        </>
    )
}
