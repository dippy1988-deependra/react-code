import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import counterReducer from '../components/Home/homeSlice' 
import { postApi } from "../sevices/post"

export const store = configureStore({
    reducer: {
        counter:counterReducer,
        [postApi.reducerPath]:postApi.reducer

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
})

setupListeners(store.dispatch)