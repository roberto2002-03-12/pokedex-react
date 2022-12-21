/*La imagen es tan pequeña que al final no me sirve, por lo que cambiare
de estrategia, este metodo ya no me sirve pero lo dejo para fines educativos*/

export const getImageFromUrl = (pokemons = []) => {
    return pokemons.map(pokemon => {
        const url = pokemon.url;
        const strs = url.split('/');
        const id = strs.at(6);
        pokemon.url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
        return pokemon;
    });
};