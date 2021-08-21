import React, {useEffect} from 'react'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import TrackOrders from '../track-orders/TrackOrders'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {setOrders, setTrackOrder} from '../../rootSlice/rootSlice'

export default function DashboardPage() {

    let param = useParams()
    const dispatch = useDispatch()
    const selector = useSelector(state => state.orders)

    useEffect(() => {
        console.log("ASU",  dispatch(setOrders(param.page)))  
    })

    return (
        <div>
            <Sidebar/>
            {
                param.page === "orders" && <Dashboard/>
            }
            {
                param.page === "track-orders" && <TrackOrders/>
            }
        </div>
    )
}