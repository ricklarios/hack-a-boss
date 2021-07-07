function Header({ getGameOver }) {
    return (
        <div>
            <h1>TIC TAC TOE en React</h1>
            {getGameOver && <h2>Game Finished!!</h2>}
        </div>
    );
}

export default Header;
