import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const { pokemons, isLoading, page } = useSelector(
    (state: RootState) => state.pokemon,
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
    return () => {};
  }, [dispatch]);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: {isLoading ? "True" : "False"}</span>
      <hr />
      <span>Page: {page}</span>
      <ul>
        {pokemons.map((el) => {
          return <li key={el.name}>{el.name}</li>;
        })}
      </ul>

      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page - 2))}
      >
        Previous
      </button>
      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
    </>
  );
};
