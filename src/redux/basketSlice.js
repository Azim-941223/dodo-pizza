import { createSlice } from "@reduxjs/toolkit"

const basketSlice = createSlice({
    name:'basket',
    initialState:{
        data: JSON.parse(localStorage.getItem('basket')) || [],
    },
    reducers:{
        addToBasket:(state,action) => {
            //const isExist = state.data.find((item => item.id === pizza.id && pizza.isDrink === item?.isDrink ))
            //if (!isExist)
                state.data.push(action.payload)
        },
        deleteBasket:(state,action) => {
            state.data = state.data.filter((item) => item.id !== action.payload)
        }
    },
})

export const basketAction = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
