import { useState, useEffect } from 'react';
import './poke-div.css';

function PokeDiv({ pokemon }) {
    const INITAL_POKEMON_DATA = {
        sprite: undefined,
        types: [],
    };

    const [myPokemonData, setMyPokemonData] = useState(INITAL_POKEMON_DATA);
    async function getPokemonData(url) {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data.sprites.front_default);
        const pokemonSprite = data.sprites.front_default;
        const pokemonTypes = data.types
            .map((slot) => slot.type.name)
            .join(', ');

        console.log(pokemonTypes);

        setMyPokemonData({
            sprite: pokemonSprite,
            types: pokemonTypes,
        });
    }

    useEffect(() => {
        getPokemonData(pokemon.url);
        //console.log(myPokemonData);
    }, [pokemon]);

    return (
        <div className='pokemon-li-div'>
            <img
                src={myPokemonData.sprite}
                alt=''
                className='pokemon-img'
            ></img>
            <p>Tipos: {myPokemonData.types}</p>
        </div>
    );
}

export default PokeDiv;
