import { PokemonCardList } from './components/PokemonCardList';
import '../../styles/ListPokemons.css'
import { PokemonSearch } from './components/PokemonSearch';

export const PokemonHome = () => {  
  return (
    <>
    <div className="container">
      <PokemonSearch/>
      <br />
      <PokemonCardList/>
    </div>
    </>
  )
}
