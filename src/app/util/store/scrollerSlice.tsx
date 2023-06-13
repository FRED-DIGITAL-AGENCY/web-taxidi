import { createSlice } from '@reduxjs/toolkit'

export const scrollerSlice = createSlice({
  name: 'scroller',
  initialState: {
    scroller: null
  },
  reducers: {
    
    setScroller: (state, action) => {
      state.scroller = action.payload.scroller
    }
  }
})

// Action creators are generated for each case reducer function
export const { setScroller } = scrollerSlice.actions

export default scrollerSlice.reducer