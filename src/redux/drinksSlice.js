import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from '../api/Api';

export const getAllDrinks = createAsyncThunk(
    'drinks/GET_ALL_DRINKS',
    async () => {
        const res = await Api.getDrinks()
        return res.data
        //const res = await fetch(base_url + 'drinks');
        //const data = await res.json();
        //return data this is fetch request
    }
)

const drinksSlice = createSlice({
    name: 'drinks',
    initialState: {
        data:[]
    },
    reducers: {
        addDrinks:(state,action) => {
            state.data = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllDrinks.fulfilled, (state,action) => {
            state.data = false
            state.data = action.payload
        })
    }
})

export const drinksAction = drinksSlice.actions;
export const drinksReducer = drinksSlice.reducer;