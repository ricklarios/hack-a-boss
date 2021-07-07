import { GrClose } from 'react-icons/gr';
import { BsCircle } from 'react-icons/bs';

function GameBox({ className, value, onClickGameBox }) {
    const iconSize = '3em';
    const label =
        value === 'X' ? (
            <GrClose size={iconSize} />
        ) : (
            <BsCircle size={iconSize} />
        );
    return (
        <div onClick={onClickGameBox} className={className}>
            {value && label}
        </div>
    );
}

export default GameBox;

// CONDITIONAL RENDERING: Es lo mismo que: {value ? label : ''}
