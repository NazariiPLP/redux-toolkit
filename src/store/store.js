import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slicer/counterSlice';

const store = configureStore({
    reducer: counterReducer
});

export default store;