import { createSlice } from '@reduxjs/toolkit'

export const refSlice = createSlice({
  name: 'ref',
  initialState: {
    ref: null
  },
  reducers: {
    
    setRef: (state, action) => {
      state.ref = action.payload.ref
    }
  }
})

// Action creators are generated for each case reducer function
export const { setRef } = refSlice.actions

export default refSlice.reducer