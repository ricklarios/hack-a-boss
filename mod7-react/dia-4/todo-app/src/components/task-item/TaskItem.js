import './task-item.css';
import { BsTrash } from 'react-icons/bs';

function TaskItem({ task, removeTask }) {

    // const labelStyle = task.isCompleted ? 
    return (
        <li className='task-item-container' key={task.id}>
            <input type='checkbox' onChange={} checked={task.isCompleted} />
            <span>{task.label}</span>
            <button
                className='remove-task-button'
                onClick={() => removeTask(task.id)}
            >
                <BsTrash />
            </button>
        </li>
    );
}

export default TaskItem;
