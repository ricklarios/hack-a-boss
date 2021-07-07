import './game-board.css';
import GameBox from '../game-box/GameBox';

function GameBoard({ gameBoard, onClickGameBox }) {
    return (
        <div className='game-board-container'>
            <div className='row-container'>
                <GameBox
                    onClickGameBox={() => onClickGameBox(0)}
                    value={gameBoard[0]}
                    className='border-right border-bottom'
                />

                <GameBox
                    className='border-left border-right border-bottom'
                    value={gameBoard[1]}
                    onClickGameBox={() => onClickGameBox(1)}
                />
                <GameBox
                    className='border-left  border-bottom'
                    value={gameBoard[2]}
                    onClickGameBox={() => onClickGameBox(2)}
                />
            </div>
            <div className='row-container'>
                <GameBox
                    className='border-right border-bottom border-top'
                    value={gameBoard[3]}
                    onClickGameBox={() => onClickGameBox(3)}
                />
                <GameBox
                    className='border-left border-right border-bottom border-top'
                    value={gameBoard[4]}
                    onClickGameBox={() => onClickGameBox(4)}
                />
                <GameBox
                    className='border-left  border-bottom border-top'
                    value={gameBoard[5]}
                    onClickGameBox={() => onClickGameBox(5)}
                />
            </div>
            <div className='row-container'>
                <GameBox
                    className='border-right border-top'
                    value={gameBoard[6]}
                    onClickGameBox={() => onClickGameBox(6)}
                />
                <GameBox
                    className='border-left border-right border-top'
                    value={gameBoard[7]}
                    onClickGameBox={() => onClickGameBox(7)}
                />
                <GameBox
                    className='border-left  border-top'
                    value={gameBoard[8]}
                    onClickGameBox={() => onClickGameBox(8)}
                />
            </div>
        </div>
    );
}

export default GameBoard;
