

export const PokemonPlaces = ({places = []}) => {

    return (
        <>
            {
                places.map(place => (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{place?.place}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Versions</h6>
                            <div className="content-places">
                                {
                                    place.versions.map(version => (
                                        <div className="pokemon-places-versions" key={version}>
                                            {version}
                                        </div>
                                    ))
                                }
                            </div>
                            <h6 className="card-subtitle mb-2 text-muted">Levels</h6>
                            <div className="content-places">
                                {
                                    place.min_level.map(level => (
                                        <div className="pokemon-places-levels">
                                            {level}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};