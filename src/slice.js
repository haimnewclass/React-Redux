import {createSlice} from '@reduxjs/toolkit'

const buttonsSlice = createSlice({
 name:'number', 
 initialState:{
    total:10,
    more:100,
    andmore:300
 },reducers:{
    plus:(state,action)=>{
        state.total++;
        state.andmore++;
    },minus:(state,action)=>{
        state.total--;
        state.andmore++;
    },mult:(state,action)=>{
        state.total = state.total * 2;
        state.andmore++;
    }

 }

});

export const {plus,minus,mult} = buttonsSlice.actions;
export default buttonsSlice.reducer;
