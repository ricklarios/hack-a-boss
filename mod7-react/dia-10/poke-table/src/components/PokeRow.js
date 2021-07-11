import { useState, useEffect } from 'react';

function PokeRow({ pokemon }) {
    const [pokeInfo, setPokeInfo] = useState({});

    async function getPokeInfo(url) {
        const res = await fetch(url);
        const data = await res.json();

        setPokeInfo(data);
    }

    useEffect(() => {
        if (pokemon.url) {
            getPokeInfo(pokemon.url);
        }
    }, [pokemon]);

    const imgUrl = pokeInfo?.sprites?.front_default;
    const pokemonTypes = pokeInfo?.types
        ?.map((slot) => slot.type.name)
        .join(', ');

    console.log(pokemonTypes);

    return (
        <tr>
            <td>
                <img src={imgUrl} alt='avatar'></img>
            </td>
            <td>{pokemon.name}</td>
            <td>{pokemon.name}</td>
        </tr>
    );
}

export default PokeRow;
