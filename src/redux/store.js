import {configureStore} from '@reduxjs/toolkit'
import {reducer} from './rootSlice'

export default configureStore({reducer})