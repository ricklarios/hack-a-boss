import './App.css';
import { useState } from 'react';
import PokeTable from './components/PokeTable';

function App() {
    const [showTable, setShowTable] = useState(false);

    const label = showTable ? 'Ocultar Tabla' : 'Mostrar Tabla';

    return (
        <div className='App'>
            <h1>Tabla de Pokemons</h1>
            <button onClick={() => setShowTable(!showTable)}>{label}</button>
            {showTable && <PokeTable />}
        </div>
    );
}

export default App;
