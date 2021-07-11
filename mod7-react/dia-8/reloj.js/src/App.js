import './App.css';
import { useState } from 'react';
import Clock from './components/Clock';

function App() {
    const [showClock, setShowClock] = useState(true);

    const label = showClock ? 'Ocultar Reloj' : 'Mostrar Reloj';

    return (
        <div className='App'>
            <h1>RELOJ</h1>
            <button onClick={() => setShowClock(!showClock)}>{label}</button>
            {showClock && <Clock />}
        </div>
    );
}

export default App;
