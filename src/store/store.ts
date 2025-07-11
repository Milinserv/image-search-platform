import { configureStore } from '@reduxjs/toolkit';
import imageReducer from "./image/imageSlice.ts";

export const store = configureStore({
    reducer: {
        image: imageReducer,
    },
});