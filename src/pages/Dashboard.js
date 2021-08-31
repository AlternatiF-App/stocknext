import React, {useEffect, useState} from 'react'
import SideMenu from '../components/side-menu/SideMenu'
import Orders from '../components/dashboard/Orders'
import TrackOrders from '../components/dashboard/TrackOrders'
import TrackOrdersDetail from '../components/dashboard/TrackOrdersDetail'
import Products from '../components/dashboard/Products'
import ProductDetail from '../components/dashboard/ProductDetail'
import {useDispatch, useSelector} from 'react-redux'
import {useParams, useRouteMatch} from 'react-router-dom'
import {Switch, Route, Link} from 'react-router-dom'
import {setPage} from '../redux/rootSlice'

export default function Dashboard() {

    let params = useParams()
    let dispatch = useDispatch()
    const pages = useSelector((state) => state.page)
    const {path, url} = useRouteMatch()

    useEffect(() => {
        // dispatch(setPage(params.pages))
        console.log("path", path)
        console.log("url", url)
    })

    return (
        <div>
            <SideMenu/>
            <Switch>
                <Route path={`${path}/orders`} component={Orders}/>
                <Route exact path={`${path}/track-order`} component={TrackOrders}/>
                <Route exact path={`${path}/products`} component={Products}/>
                <Route path={`${path}/track-order/:id`} component={TrackOrdersDetail}/>
                <Route path={`${path}/products/:id`} component={ProductDetail}/>
            </Switch>
            {/* {pages === "orders" && <Orders/>}
            {pages === "track-order" && <TrackOrders/>}
            {pages === "products" && <Products/>} */}
            {   
                // (() => {
                //     switch(counter){
                //         case "orders":
                //             return(
                //                 <Orders/>
                //             )
                //         case "track-order":
                //             return(
                //                 <TrackOrders/>
                //             )
                //         case "products":
                //             return(
                //                 <Products/>
                //             )
                //         case "products/:productid":
                //             return(
                //                 <ProductDetail/>
                //             )
                //         default:
                //             return(
                //                 <Orders/>
                //             )
                //     }
                // })()
            }
        </div>
    )
}
