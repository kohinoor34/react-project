import {configureStore} from '@reduxjs/toolkit'
import cartSlice from '../cardSlice/cardSlice'

export let Store = configureStore({
  reducer : {
  cart:cartSlice,

  }
})