function Footer({ resetGameBoard, getGameOver }) {
    return <div>{getGameOver && <button>New Game</button>}</div>;
}

export default Footer;
