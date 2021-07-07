import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import TaskList from './components/task-list/TaskList';
import Footer from './components/footer/Footer';
import { v4 as uuidv4 } from 'uuid';

const INITIAL_TASKS = [
    {
        id: uuidv4(),
        label: 'Learn HTML',
        isCompleted: false,
    },
    {
        id: uuidv4(),
        label: 'Learn CSS',
        isCompleted: false,
    },
    {
        id: uuidv4(),
        label: 'Learn Javascript',
        isCompleted: false,
    },
];

function App() {
    const [tasks, setTasks] = useState(INITIAL_TASKS);

    // Función para eliminar una tarea:
    function removeTask(taskId) {
        const tasksFiltered = tasks.filter((task) => task.id !== taskId);
        setTasks(tasksFiltered);
    }
    // Función para añadir una tarea:
    function addNewTask(taskLabel) {
        const newTask = {
            id: uuidv4(),
            label: taskLabel,
            isCompleted: false,
        };
        const newTaskList = [...tasks, newTask];
        setTasks(newTaskList);
    }
    // Función para dar por completada una tarea:
    function completeTask(taskId) {
        const task = tasks.find((task) => task.id === taskId);
        task.isCompleted = !task.isCompleted;

        setTasks([...tasks]);
    }

    return (
        <div className='App'>
            <Header addNewTask={addNewTask} />
            <TaskList
                tasks={tasks}
                removeTask={removeTask}
                completeTask={completeTask}
            />
            <Footer tasks={tasks} />
        </div>
    );
}

export default App;
