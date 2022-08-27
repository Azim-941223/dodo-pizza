import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { basketReducer } from "./basketSlice";
import { pizzasReducer } from "./pizzasSlice";
import { drinksReducer } from "./drinksSlice";

const redusers = combineReducers({
    pizzas: pizzasReducer,
    basket: basketReducer,
    drinks: drinksReducer,
})

export const store = configureStore({
    reducer: redusers,
});

store.subscribe(() => {
    const redux = store.getState()
    localStorage.setItem('basket', JSON.stringify(redux.basket.data))
})


