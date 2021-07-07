import './task-item.css';
import { BsTrash } from 'react-icons/bs';

function TaskItem({ task, removeTask, completeTask }) {
    const labelStyle = {
        textDecoration: task.isCompleted ? 'line-through' : 'none',
    };

    return (
        <li className='task-item-container'>
            <input
                type='checkbox'
                checked={task.isComplete}
                onChange={() => completeTask(task.id)}
            />
            <span style={labelStyle}>{task.label}</span>

            <button
                onClick={() => removeTask(task.id)}
                className='remove-task-button'
            >
                <BsTrash />
            </button>
        </li>
    );
}

export default TaskItem;
