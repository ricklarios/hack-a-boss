import './tasklist.css';
import TaskItem from '../task-item/TaskItem';

function TaskList({ tasks, removeTask }) {
    return (
        <ul className='task-list'>
            {tasks.map((task) => (
                <TaskItem key={tasks.id} task={task} removeTask={removeTask} />
            ))}
        </ul>
    );
}

export default TaskList;
