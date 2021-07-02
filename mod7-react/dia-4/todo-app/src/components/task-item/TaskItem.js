import './task-item.css';
import { BsTrash } from 'react-icons/bs';

function TaskItem({ task }) {
    return (
        <li className='task-item-container'>
            {task.label}
            <button className='remove-task-button'>
                <BsTrash />
            </button>
        </li>
    );
}

export default TaskItem;
