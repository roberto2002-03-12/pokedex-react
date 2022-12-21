import { Navigate, Route, Routes } from 'react-router-dom';
import { PokemonHome } from '../pages/PokemonHome/PokemonHome';
import { PokemonSelected } from '../pages/PokemonSelected/PokemonSelected';
import { NavBar } from '../components/NavBar';

export const PokemonsRoutes = () => {
    return (
        <>
            <NavBar />

            <Routes>
                <Route path='home' element={ <PokemonHome/> }/>
                <Route path='home/pokemon/:name' element={<PokemonSelected/>}/>
                <Route path='/' element={<Navigate to='/home'/>} />
                <Route path='/*' element={<Navigate to='/home'/>} />
            </Routes>
        </>
    )
};