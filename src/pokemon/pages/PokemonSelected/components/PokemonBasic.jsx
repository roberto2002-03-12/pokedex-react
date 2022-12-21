export const PokemonBasic = ({ abilities = [], stats = [] }) => {

    return (
        <>
            <h4>Abilities</h4>
            <div className="pokemon-abilities-information">
                {
                    abilities.map(ability => (
                        <div key={ability.name}>
                            <p>{ability.name}</p>
                        </div>
                    ))
                }
            </div>
            <hr />
            <h4>Stats</h4>
            <div className="pokemon-stats-information">
                {
                    stats.map(stat => (
                        <div key={stat.stat}>
                            <h5>{stat.stat}</h5>
                            <p>{stat.score}</p>
                        </div>
                    ))
                }
            </div>
        </>
    );
};