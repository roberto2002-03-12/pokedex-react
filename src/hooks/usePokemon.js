import { pokeApi } from '../api';
import { useDispatch } from 'react-redux';
import { onLoadPokemons, onSetActivePokemon, onSetSearchedPokemon, onSetPlacesPokemon } from '../store/pokemon/pokemonSlice';
import { getImageFromUrl } from '../helpers/getImageFromUrl';

export const usePokemon = () => {
    const dispatch = useDispatch();

    const setNextPage = () => {
        const pageNumber = parseInt(localStorage.getItem('offset')) || 0;
        const page = pageNumber + 20;
        localStorage.setItem('offset', page);
        startLoadingPokemons();
    };

    const setPrevPage = () => {
        const pageNumber = parseInt(localStorage.getItem('offset')) || 0;
        if (pageNumber == 0) return;
        const page = pageNumber - 20;
        localStorage.setItem('offset', page);
        startLoadingPokemons();
    };

    const setActivePokemon = (pokemon) => {
        dispatch(onSetActivePokemon(pokemon));
    };

    const startLoadingPokemons = async () => {
        try {
            const page = localStorage.getItem('offset');
            const results = await pokeApi.get(`/pokemon?limit=20&offset=${page}`);
            const array = getImageFromUrl(results.data.results);
            dispatch(onLoadPokemons(array));
        } catch (err) {
            console.log('Error en cargar pokemones');
            console.log(err);
        };
    };

    const startSearchingPlaces = async (id) => {
        try {
            const results = await pokeApi.get(`pokemon/${id}/encounters`);
            const array = results.data;
            const newData = array.map(place => {
                return ({
                    place: place.location_area.name.replace(/-/g, ' '),
                    versions: place.version_details.map(version => version.version.name.replace(/-/g, ' ')),
                    min_level: place.version_details.map(levels => levels.encounter_details[0].min_level)
                });
            });

            dispatch(onSetPlacesPokemon(newData));
        } catch (err) {
            console.log('error al encontrar lugar')
            console.log(err);
        }
    };

    const startSearchingPokemon = async (name) => {
        try {
            console.log('solicitando datos')
            const results = await pokeApi.get(`pokemon/${name}`);
            const arrayStats = results.data.stats;
            const arrayAbilities = results.data.abilities;
            const arrayMoves = results.data.moves;
            
            const newData = {
                id: results.data.id,
                name: results.data.name,
                image: results.data.sprites.other.dream_world.front_default,
                height: results.data.height,
                weight: results.data.weight,
                experience: results.data.base_experience,
                stats: arrayStats.map(stats => {
                    return ({
                        stat: stats.stat.name,
                        score: stats.base_stat
                    });
                }),
                abilities: arrayAbilities.map(abilit => {
                    return ({
                        name: abilit.ability.name
                    })
                }),
                moves: arrayMoves.map(move => {
                    return ({
                        move: move.move.name
                    });
                })
            };
            
            dispatch(onSetSearchedPokemon(newData));
            await startSearchingPlaces(newData.id);
        } catch (err) {
            console.log('Error en cargar pokemones');
            console.log(err);
            dispatch(onSetSearchedPokemon(false));
        };
    };

    const startSearchingPokemonBar = async (name) => {
        try {
            if (name == '') return;
            console.log('buscando pokemon');
            const results = await pokeApi.get(`pokemon/${name}`);
            const data = [{
                name: results.data.name,
                url: results.data.sprites.other.dream_world.front_default
            }];

            dispatch(onLoadPokemons(data));
        } catch (err) {
            console.log('Error en el buscador de poemones');
            console.log(err);
        };
    };

    return {
        //seleccionar
        setActivePokemon,
        //cargar
        startLoadingPokemons,
        startSearchingPokemon,
        //paginar
        setNextPage,
        setPrevPage,
        //buscar
        startSearchingPlaces,
        startSearchingPokemonBar
    };
};