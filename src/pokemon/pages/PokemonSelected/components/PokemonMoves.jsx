export const PokemonMoves = ({moves = []}) => {

    return (
        <>
            <h4>Moves</h4>
            <div className="pokemon-moves-information">
                {
                    moves.map(move => (
                        <div key={move.move}>
                            <p>{move.move}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
};