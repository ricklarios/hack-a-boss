function OperatorButton({ onClick, value, className }) {
    return (
        <button
            onClick={() => onClick(value)}
            className={className}
            value={value}
        >
            {value}
        </button>
    );
}

export default OperatorButton;
