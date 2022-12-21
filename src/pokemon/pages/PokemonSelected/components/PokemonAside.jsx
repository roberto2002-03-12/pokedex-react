import { memo } from "react";

export const PokemonAside = memo(({pokemon}) => {
    return (
        <div className="aside col-xl-4 col-lg-4">
            <div className="card pokemon-card-aside">
                <img src={`${pokemon?.image}`} alt="pokemon x" />
            </div>

            <div className="pokemon-details-aside">
                <h5>{pokemon?.name}</h5>
                <h5>Experience score: {pokemon?.experience}</h5>
                <h5>Height: {pokemon?.height}</h5>
                <h5>Weight: {pokemon?.weight}</h5>
            </div>
        </div>
    );
});