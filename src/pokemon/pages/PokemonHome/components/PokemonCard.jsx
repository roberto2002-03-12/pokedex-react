import { memo } from 'react';
import { Link } from 'react-router-dom';

export const PokemonCard = memo(({name, url}) => {
    return (
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="card">
                <img src={`${url}`} alt="pokemon x" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{ name }</h5>
                    <Link to={`pokemon/${name}`} className='btn'>
                        More info
                    </Link>
                </div>
            </div>
        </div>
    );
});