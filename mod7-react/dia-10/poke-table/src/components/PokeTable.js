import { useState, useEffect } from 'react';
import PokeRow from './PokeRow';

function PokeTable() {
    const [pokemons, setPokemons] = useState([]);
    const [isTableLoading, setIsTableLoading] = useState(false);

    async function getPokemons() {
        setIsTableLoading(true);
        const res = await fetch(
            'https://pokeapi.co/api/v2/pokemon?offset=0&limit=5'
        );
        const data = await res.json();

        setPokemons(data.results);
        setIsTableLoading(false);
    }

    useEffect(() => {
        getPokemons();
    }, []);

    return isTableLoading ? (
        <div>CARGANDO.....</div>
    ) : (
        <table>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Tipo</th>
                </tr>
            </thead>
            <tbody>
                {pokemons.map((pokemon) => (
                    <PokeRow key={pokemon.url} pokemon={pokemon} />
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan='3'>Botones</td>
                </tr>
            </tfoot>
        </table>
    );
}

export default PokeTable;
