import { createSlice } from '@reduxjs/toolkit'

export interface ProductState {
  list: any[]
}

const initialState: ProductState = {
  list: [],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getList: (state: ProductState) => {
      state.list
    },
  },
})

export const { getList } = productSlice.actions
export default productSlice.reducer
