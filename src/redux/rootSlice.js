import {createSlice} from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: 'root',
    initialState:{
        page: '',
        navbar: ''
    },
    reducers:{
        setPage:(state, action) => {state.page = action.payload},
        setNavbar:(state, action) => {state.navbar = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const {setPage, setNavbar} = rootSlice.actions;