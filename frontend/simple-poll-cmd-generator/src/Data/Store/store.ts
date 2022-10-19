import { configureStore } from '@reduxjs/toolkit'
import optionsReducer from '../Slices/optionsSlice'

const store = configureStore({
  reducer: {
    options: optionsReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;