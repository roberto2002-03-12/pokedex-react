import { configureStore } from '@reduxjs/toolkit';
import { pokemonSlice } from './pokemon/pokemonSlice';

export const store = configureStore({
    reducer: {
        pokemon: pokemonSlice.reducer,
    }
});