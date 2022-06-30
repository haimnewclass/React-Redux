import { configureStore } from '@reduxjs/toolkit';
import buttonsSlice  from './slice.js';

const store = configureStore({
    reducer:{
        reducerNumber:buttonsSlice
    }
})

export default store;