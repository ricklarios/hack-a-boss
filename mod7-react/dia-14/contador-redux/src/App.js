import './App.css';
import Button from './components/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
    INCREMENT_ACTION,
    SET_COUNTER,
    DECREMENT_ACTION,
} from './store/actions';

function App() {
    // const [contador, setContador] = useState(0);

    // function incrementarContador() {
    //   const newContador = contador + 1;
    //   setContador(newContador);
    // }

    // function decrementarContador() {
    //   setContador(contador - 1);
    // }

    // function resetarContador() {
    //   setContador(0);
    // }

    const counter = useSelector((state) => state.counter.counter);

    const dispatch = useDispatch();

    function incrementarContador() {
        // dispachear una accion
        const actionIncrement = {
            type: INCREMENT_ACTION,
        };
        dispatch(actionIncrement);
    }
    function decrementarContador() {
        // dispachear una accion
        const actionDecrement = {
            type: DECREMENT_ACTION,
        };
        dispatch(actionDecrement);
    }

    function resetarContador() {
        // dispachear una accion
        const actionReset = {
            type: SET_COUNTER,
            payload: 0,
        };
        dispatch(actionReset);
    }

    return (
        <div className='App'>
            <h1>Contador en React</h1>
            <div className='contador-label'>{counter}</div>
            <div className='buttons-container'>
                <Button onClick={decrementarContador}>Decrementar</Button>
                <Button onClick={resetarContador}>Reset</Button>
                <Button onClick={incrementarContador}>Incrementar</Button>
            </div>
        </div>
    );
}

export default App;
