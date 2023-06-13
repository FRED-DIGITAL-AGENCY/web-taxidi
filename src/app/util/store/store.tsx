import { configureStore } from '@reduxjs/toolkit'
import refSlice from './refSlice'
import scrollerSlice from './scrollerSlice'

export default configureStore({
  reducer: {
    ref:refSlice,
    scroller:scrollerSlice
  }
})