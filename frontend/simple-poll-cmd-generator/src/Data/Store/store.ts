import { configureStore } from '@reduxjs/toolkit'
import voteInfoReducer from '../Slices/voteInfoSlice'

const store = configureStore({
  reducer: {
    voteInfo: voteInfoReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;