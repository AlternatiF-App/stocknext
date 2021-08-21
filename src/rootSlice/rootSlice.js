import {createSlice} from '@reduxjs/toolkit'

export const rootSlice = createSlice({
    name: 'root',
    initialState: {
        orders: '',
        trackOrder: ''
    },
    reducer: {
        setOrders:(state, action) => {state.orders = action.payload},
        setTrackOrder:(state, action) => {state.trackOrder = action.payload}
    }
})

reducer = rootSlice.reducer;

export default reducer;
export const { setOrders, setTrackOrder } = rootSlice.actions;