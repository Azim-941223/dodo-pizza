import { createSlice } from "@reduxjs/toolkit"

const basketSlice = createSlice({
    name:'basket',
    initialState:{
        data:[],
    },
    reducers:{
        addToBasket:(state,action) => {
            state.data.push(action.payload)
        }
    },
})

export const basketAction = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
