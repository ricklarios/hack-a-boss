function NumericButton({ onClick, value }) {
    return (
        <button
            onClick={() => onClick(value)}
            className='numeric-button'
            value={value}
        >
            {value}
        </button>
    );
}

export default NumericButton;
