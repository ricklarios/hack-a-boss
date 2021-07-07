import './tasklist.css';
import TaskItem from '../task-item/TaskItem';

function TaskList({ tasks, removeTask, completeTask }) {
    return (
        <ul className='task-list'>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    removeTask={removeTask}
                    completeTask={completeTask}
                />
            ))}
        </ul>
    );
}

export default TaskList;
