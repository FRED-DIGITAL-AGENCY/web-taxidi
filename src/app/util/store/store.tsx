import { configureStore } from '@reduxjs/toolkit'
import refSlice from './refSlice'

export default configureStore({
  reducer: {
    ref:refSlice
  }
})