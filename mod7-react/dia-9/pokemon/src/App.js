import { useState } from 'react';
import './App.css';
import PokeList from './componentes/pokelist/PokeList';

function App() {
    const [showList, setShowList] = useState(false);

    const label = showList ? 'Ocultar Lista' : 'Mostrar lista';

    return (
        <div className='App'>
            <h1>Listado POKEMONS en React</h1>
            <button className='btn-grad' onClick={() => setShowList(!showList)}>
                {label}
            </button>
            {showList && <PokeList />}
        </div>
    );
}

export default App;
