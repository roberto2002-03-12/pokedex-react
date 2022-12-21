import { useMemo, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { usePokemon } from '../../../hooks/usePokemon';
import { useSelector } from 'react-redux';
import { PokemonAside, PokemonBasic, PokemonMoves, PokemonPlaces } from './components';
import '../../styles/PokemonSelected.css';

export const PokemonSelected = () => {
    const { activePokemon, isLoadingPokemons, placesPokemon } = useSelector(state => state.pokemon)
    const { startSearchingPokemon } = usePokemon();
    const { name } = useParams();
    const [ view, setView ] = useState({section: 1});

    useMemo(() => {
        startSearchingPokemon(name);
    }, [name]);

    if (activePokemon == false) {
        return <Navigate to='/'/>
    };

    return (
        <div className='container'>
            {
                (isLoadingPokemons == true)
                ? <div>Loading...</div>
                : (
                    <div className='row'>
                        <PokemonAside pokemon={ activePokemon }/>
                        <div className="col-xl-8 col-lg-8">
                            <div className="pokemon-information">
                                <h3>Information</h3>
                                <hr />
                                <div className="pokemon-sections-information">
                                    <button type="button" className="btn btn-primary" onClick={() => setView({section: 1})}>Basic</button>
                                    <button type="button" className="btn btn-danger" onClick={() => setView({section: 2})}>Moves</button>
                                    <button type="button" className="btn btn-info" onClick={() => setView({section: 3})}>Where to catch it?</button>
                                </div>
                                <hr />
                                {
                                    view.section === 1 ? <PokemonBasic abilities={activePokemon?.abilities} stats={activePokemon?.stats}/>
                                    : view.section === 2 ? <PokemonMoves moves={activePokemon?.moves}/>
                                    : view.section === 3 ? <PokemonPlaces places={placesPokemon}/>
                                    : ''
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};