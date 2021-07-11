import { useState } from 'react';
import PokeDiv from '../poke-div/PokeDiv';

function PokeLi({ pokemon }) {
    const [showPokemonData, setShowPokemonData] = useState(false);

    return (
        <li onClick={() => setShowPokemonData(!showPokemonData)}>
            {pokemon.name}
            {showPokemonData && <PokeDiv pokemon={pokemon} />}
        </li>
    );
}

export default PokeLi;
