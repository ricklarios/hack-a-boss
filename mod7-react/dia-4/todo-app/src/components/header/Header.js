import { useState } from 'react';
import './header.css';

function Header({ addNewTask }) {
    // Creamos el estado interno del header
    const [text, setText] = useState('');

    function onChangeInput(event) {
        const value = event.target.value;
        setText(value);
        // console.log("onChange: ", value);
    }

    function onClickAdd() {
        addNewTask(text);
        setText('');
    }

    return (
        <header className='header-container'>
            <input
                value={text}
                type='text'
                className='add-task-input'
                placeholder='Enter new Task'
                onChange={onChangeInput}
            ></input>
            <button onClick={onClickAdd} className='add-task-button'>
                Add
            </button>
        </header>
    );
}

export default Header;
