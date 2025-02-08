import { configureStore } from '@reduxjs/toolkit';
import { shopApi } from './shopApi'; // Убедитесь, что путь правильный
import shopReducer from './shopSlice';
import authReducer from './authSlice'
import cartReducer from './cartSlice';
import filterReducer from './filterSlice';
export const store = configureStore({
    reducer: {
        [shopApi.reducerPath]: shopApi.reducer,
        shopSlice: shopReducer,
        authSlice: authReducer,
        cartSlice: cartReducer,
        filterSlice: filterReducer,
        
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(shopApi.middleware),
});
