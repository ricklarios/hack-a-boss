import './App.css';
import NumericButton from './components/button/numeric-button/NumericButton';
import ClearButton from './components/button/clear-button/ClearButton';
import OperatorButton from './components/button/operator-button/OperatorButton';
import ResultButton from './components/button/result-button/ResultButton';
import Screen from './components/screen/Screen';
import { useState } from 'react';

function App() {
    const [op1, setOp1] = useState(0);
    const [op2, setOp2] = useState(0);
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState(null);

    function onClickNumber(number) {
        if (result === null) {
            if (operator) {
                const newValue = Number(`${op2}${number}`);
                setOp2(newValue);
            } else {
                const newValue = Number(`${op1}${number}`);
                setOp1(newValue);
            }
        }
    }
    function onClickOperator(newOperator) {
        if (!operator && op1) {
            setOperator(newOperator);
        }
    }

    function onClickClear() {
        setOp1(0);
        setOp2(0);
        setOperator('');
        setResult(null);
    }

    function onClickResult() {
        const operations = {
            '+': (op1, op2) => op1 + op2,
            '-': (op1, op2) => op1 - op2,
            '/': (op1, op2) => op1 / op2,
            '*': (op1, op2) => op1 * op2,
        };
        const result = operations[operator](op1, op2);
        setResult(result);
    }

    return (
        <div className='calculadora'>
            <Screen op1={op1} op2={op2} operator={operator} result={result} />
            <ClearButton onClick={onClickClear} />
            <OperatorButton onClick={onClickOperator} value={'/'} />
            <OperatorButton onClick={onClickOperator} value={'*'} />
            <NumericButton onClick={onClickNumber} value={7} />
            <NumericButton onClick={onClickNumber} value={8} />
            <NumericButton onClick={onClickNumber} value={9} />
            <OperatorButton onClick={onClickOperator} value={'-'} />
            <NumericButton onClick={onClickNumber} value={4} />
            <NumericButton onClick={onClickNumber} value={5} />
            <NumericButton onClick={onClickNumber} value={6} />
            <OperatorButton
                onClick={onClickOperator}
                className='sum-button'
                value={'+'}
            />
            <NumericButton onClick={onClickNumber} value={1} />
            <NumericButton onClick={onClickNumber} value={2} />
            <NumericButton onClick={onClickNumber} value={3} />
            <NumericButton onClick={onClickNumber} value={0} />
            <button>.</button>
            <ResultButton onClick={onClickResult} />
        </div>
    );
}

export default App;
