import {createSlice} from '@reduxjs/toolkit'

export const rootSlice = createSlice({
    name: 'root',
    initialState: {
        orders: '',
        trackOrder: '',
        product: [],
    },
    reducer: {
        setOrders:(state, action) => {state.orders = action.payload},
        setTrackOrder:(state, action) => {state.trackOrder = action.payload},
        setProduct:(state, action) => {state.product = action.payload},
    }
})

reducer = rootSlice.reducer;

export default reducer;
export const { setOrders, setTrackOrder, setProduct } = rootSlice.actions;