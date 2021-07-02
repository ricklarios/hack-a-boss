import './header.css';

function Header(onClickAddTask) {
    return (
        <header className='header-container'>
            <input
                type='text'
                className='add-task-input'
                placeholder='Enter new Task'
            ></input>
            <button onClick={onClickAddTask} className='add-task-button'>
                Add
            </button>
        </header>
    );
}

export default Header;
