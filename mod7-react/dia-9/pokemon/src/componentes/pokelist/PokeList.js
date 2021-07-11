import { useState, useEffect } from 'react';
import PokeLi from '../poke-li/PokeLi';
import './poke-list.css';

function PokeList() {
    // const [pokemons, setPokemons] = useState([]);
    // const [nextUrl, setNextUrl] = useState('');
    // const [previousUrl, setpreviousUrl] = useState('');

    const INITIAL_STATE = {
        pokemons: [],
        nextUrl: '',
        previousUrl: '',
        count: 0,
    };

    const [data, setData] = useState(INITIAL_STATE);

    async function getPokemons(url) {
        const response = await fetch(url);
        const data = await response.json();
        // setPokemons(data.results);
        // setNextUrl(data.next);
        // setpreviousUrl(data.previous);
        setData({
            pokemons: data.results,
            nextUrl: data.next,
            previousUrl: data.previous,
            count: data.count,
        });
    }

    useEffect(() => {
        getPokemons('https://pokeapi.co/api/v2/pokemon');
    }, []);

    const startNumer = getStartNumber(data.pokemons);

    return (
        <ol start={startNumer} className='pokemon-list-style'>
            <h2>Lista de Pokemons</h2>
            {data.pokemons.map((pokemon) => (
                <PokeLi key={pokemon.url} pokemon={pokemon} />
            ))}

            <button
                disabled={!data.previousUrl}
                onClick={() => getPokemons(data.previousUrl)}
            >
                Previous Pokemons
            </button>

            <button
                disabled={!data.nextUrl}
                onClick={() => getPokemons(data.nextUrl)}
            >
                Next Pokemons
            </button>
            <br />
            <button
                disabled={!data.previousUrl}
                onClick={() => getPokemons('https://pokeapi.co/api/v2/pokemon')}
            >
                First Page
            </button>
            <button
                disabled={!data.nextUrl}
                onClick={() =>
                    getPokemons(
                        `https://pokeapi.co/api/v2/pokemon?offset=${
                            data.count - 20
                        }}&limit=20`
                    )
                }
            >
                Last Page
            </button>
        </ol>
    );
}

function getStartNumber(pokemons) {
    return pokemons[0]?.url.split('pokemon/')[1].split('/')[0];
}

export default PokeList;
