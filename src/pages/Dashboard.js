import React, {useEffect, useState} from 'react'
import SideMenu from '../components/side-menu/SideMenu'
import Orders from '../components/dashboard/Orders'
import TrackOrders from '../components/dashboard/TrackOrders'
import Products from '../components/dashboard/Products'
import ProductDetail from '../components/dashboard/ProductDetail'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {setPage} from '../redux/rootSlice'

export default function Dashboard() {

    const param = useParams()
    const dispatch = useDispatch()
    const counter = useSelector((state) => state.page)

    useEffect(() => {
        dispatch(setPage(param.pages))
    })

    return (
        <div>
            <SideMenu/>
            {   
                (() => {
                    switch(counter){
                        case "orders":
                            return(
                                <Orders/>
                            )
                        case "track-order":
                            return(
                                <TrackOrders/>
                            )
                        case "products":
                            return(
                                <Products/>
                            )
                        default:
                            return(
                                <Orders/>
                            )
                    }
                })()
            }
        </div>
    )
}
