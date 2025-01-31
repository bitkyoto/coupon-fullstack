import { configureStore } from '@reduxjs/toolkit';
import { myApi } from './myApi'; // Убедитесь, что путь правильный
import shopReducer from './shopSlice';

export const store = configureStore({
    reducer: {
        [myApi.reducerPath]: myApi.reducer,
        shops: shopReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(myApi.middleware),
});
