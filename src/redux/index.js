import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import { basketReducer } from "./basketSlice";

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState: {
        data:[]
    },
    reducers: {
        addPizzas:(state) => {
            console.log(state);
        }
    }
})

const redusers = combineReducers({
    pizzas: pizzasSlice.reducer,
    basket: basketReducer,
})

export const store = configureStore({
    reducer: redusers,
});

window.store = store

console.log(store);
console.log(store.getState());