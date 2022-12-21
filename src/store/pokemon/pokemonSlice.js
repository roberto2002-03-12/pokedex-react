import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        isLoadingPokemons: true,
        pokemons: [],
        activePokemon: null,
        placesPokemon: []
    },
    reducers: {
        onSetActivePokemon: (state, { payload }) => {
            state.activePokemon = payload;
        },
        onSetSearchedPokemon: (state, { payload }) => {
            state.activePokemon = null;
            state.activePokemon = payload;
            state.isLoadingPokemons = false;
        },
        onLoadPokemons: (state, { payload = []}) => {
            state.isLoadingPokemons = false;
            state.pokemons = payload;
        },
        onSetPlacesPokemon: (state, { payload = []}) => {
            state.placesPokemon = payload;
        }
    },
});

export const { 
    onSetActivePokemon,
    onSetSearchedPokemon,
    onLoadPokemons,
    onSetPlacesPokemon
} = pokemonSlice.actions;