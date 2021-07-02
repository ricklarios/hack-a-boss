import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import TaskList from './components/task-list/TaskList';

const INITIAL_TASKS = [
    {
        id: 1,
        label: 'Learn HTML',
    },
    {
        id: 2,
        label: 'Learn CSS',
    },
    {
        id: 3,
        label: 'Learn Javascript',
    },
];

function App() {
    const [task, setTask] = useState('');

    // function newTask(event) {
    //     setTask(event);
    // }

    function onClickAddTask() {
        INITIAL_TASKS.push({ id: INITIAL_TASKS.length + 1, label: `${task}` });
    }
    return (
        <div className='App'>
            <Header />
            <TaskList tasks={INITIAL_TASKS} />
        </div>
    );
}

export default App;
