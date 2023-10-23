import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface PokemonI {
    name: string;
    url:string;
}

const initialState = {
    page: 0,
    pokemons: [] as PokemonI[],
    isLoading: false
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
        state.isLoading = true;
    },
    setPokemons: (state, action: PayloadAction<{page: number, pokemons: PokemonI[]}> ) => {
        state.pokemons = action.payload.pokemons;
        state.isLoading = false;
        state.page = action.payload.page;
    }
  }
});


export default pokemonSlice.reducer 

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions