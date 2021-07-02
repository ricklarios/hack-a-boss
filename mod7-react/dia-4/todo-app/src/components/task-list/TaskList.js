import './tasklist.css';
import TaskItem from '../task-item/TaskItem';

function TaskList({ tasks }) {
    return (
        <ul className='task-list'>
            {tasks.map((task) => (
                <TaskItem key={tasks.id} task={task} />
            ))}
        </ul>
    );
}

export default TaskList;
