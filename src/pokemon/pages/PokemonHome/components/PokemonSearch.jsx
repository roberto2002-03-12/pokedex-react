import { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "../../../../hooks/useForm";
import { usePokemon } from "../../../../hooks/usePokemon";
import queryString from 'query-string';

export const PokemonSearch = () => {
    const { startSearchingPokemonBar } = usePokemon();
    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    useMemo(() => {
        startSearchingPokemonBar(q);
    }, [q]);

    const { searchPokemon, onInputChange } = useForm({
        searchPokemon: q
    });

    const onSearchInput = (event) => {
        event.preventDefault();
        if (searchPokemon.trim().length <= 1) return;

        navigate(`?q=${searchPokemon}`);
    };

    return (
        <div className="search-pokemon row">
            <form onSubmit={ onSearchInput }>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Search a Pokemon"
                        aria-describedby="button-addon2"
                        name="searchPokemon"
                        value={ searchPokemon }
                        onChange={ onInputChange }
                    />
                    <button 
                        className="btn"
                        type="button"
                        id="button-addon2"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};