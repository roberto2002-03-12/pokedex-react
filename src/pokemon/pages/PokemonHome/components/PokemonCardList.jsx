import { memo, useEffect } from "react";
import { usePokemon } from '../../../../hooks/usePokemon';
import { useSelector } from "react-redux";
import { PokemonCard } from './PokemonCard';
import { useLocation } from "react-router-dom";
import queryString from 'query-string';

export const PokemonCardList = memo(() => {
    const { startLoadingPokemons, setNextPage, setPrevPage, startSearchingPokemonBar } = usePokemon();
    const { pokemons } = useSelector(state => state.pokemon);
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const nextPage = () => {
        setNextPage();
    };

    const prevPage = () => {
        setPrevPage();
    };

    useEffect(() => {
        if (q == '') {
            startLoadingPokemons();
        } else {
            startSearchingPokemonBar(q);
        }
    }, []);

    return (
        <>
            <section className="pokemonsCards row">
                {
                    pokemons.map(poke => (
                        <PokemonCard key={poke.name} {...poke}/>
                    ))
                }
            </section>

            <section className="nextPage d-flex flex-row-reverse">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary" onClick={ prevPage }>Prev</button>
                    <button type="button" className="btn btn-primary" onClick={ nextPage }>Next</button>
                </div>
            </section>
        </>
    );
});