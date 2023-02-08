import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authReducer } from './slices/auth'
import { signUpReducer } from './slices/signUp'
import { useDispatch } from 'react-redux'

const rootReducer = combineReducers({
  user: authReducer,
  signUp: signUpReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch