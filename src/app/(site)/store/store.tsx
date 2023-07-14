import { configureStore } from '@reduxjs/toolkit'
import product from './slice/product'
import cart from './slice/cart'


export const store = configureStore({
    reducer:{
        
        cartArray : cart
    }
})



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
