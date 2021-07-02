import './screen.css';

function Screen({ op1, op2, operator, result }) {
    return <div className='screen'>{getLabel(op1, op2, operator, result)}</div>;
}

function getLabel(op1, op2, operator, result) {
    const op1Label = op1 || '';
    const op2Label = op2 || '';
    const operatorLabel = operator || '';
    const resultLabel = result !== null ? `=${result}` : '';
    return `${op1Label}${operatorLabel}${op2Label}${resultLabel}` || '0';
}

export default Screen;
