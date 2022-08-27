import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from '../api/Api';

export const getAllPizzas = createAsyncThunk(
    'pizzas/GET_ALL_PIZZAS',
    async () => {
        const res = await Api.getPizza()
        return res.data
        //const res = await fetch(base_url + 'pizza');
        //const data = await res.json();
        //return data this is fetch request
    }
)

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState: {
        data:[]
    },
    reducers: {
        addPizzas:(state, action) => {
            state.data = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllPizzas.fulfilled, (state,action) => {
            state.data = false
            state.data = action.payload
        })
    }
})


export const pizzasAction = pizzasSlice.actions;
export const pizzasReducer = pizzasSlice.reducer;