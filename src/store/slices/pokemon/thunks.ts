import { pokemonApi, setPokemons, startLoadingPokemons } from ".";
import { AppDispatch } from "../.."


export const getPokemons = (page = 0) => {
return async (dispatch:AppDispatch) => {
    const limit = 10;
    const offset = (page * limit)
    dispatch(startLoadingPokemons());
    const data = await pokemonApi.get(`/pokemon`, {
        params: {
            limit,
            offset
        }
    }).then(res=> res.data);
    console.log("data", data);
    dispatch(setPokemons({
        pokemons: data.results,
        page: page + 1
    }));
}
}