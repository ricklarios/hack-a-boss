import './App.css';
import { useState } from 'react';

function Button({ onClick, children }) {
    return <button onClick={onClick}>{children}</button>;
}
function App() {
    // HOOKS:
    const [contador, setContador] = useState(0);

    function incrementarContador() {
        setContador(contador + 1);
    }

    function decrementarContador() {
        setContador(contador - 1);
    }

    function resetContador() {
        setContador(0);
    }

    const style = {
        backgroundColor: 'grey',
    };

    return (
        <div className='App' style={style}>
            <h1>Contador en React</h1>
            <div>{contador}</div>
            <div>
                <Button onClick={incrementarContador}>INCREMENTAR</Button>
                <Button onClick={resetContador}>RESET</Button>
                <Button onClick={decrementarContador}>DECREMENTAR</Button>
            </div>
        </div>
    );
}

export default App;
