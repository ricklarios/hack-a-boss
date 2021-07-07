function Footer({ tasks }) {
    const completedTasksCount = tasks.filter(
        (task) => task.isCompleted === true
    );

    const label =
        tasks.length === completedTasksCount.length
            ? 'Todas las tareas completadas'
            : `Quedan ${tasks.length - completedTasksCount.length} tareas  de ${
                  tasks.length
              } por completar`;
    return <div>{tasks.length > 0 ? label : 'No hay tareas definidas'}</div>;
}

export default Footer;
