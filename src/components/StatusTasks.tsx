import styles from './StatusTasks.module.css'

interface StatusTasksProps{
    countTasks: number;
    countComplitedTask: number;
}

export function StatusTasks({countTasks, countComplitedTask} : StatusTasksProps){

    return(
        <div className={styles.statusToDo}>
            <div className={styles.tasksCreated}>
                Tarefas criadas <span>{countTasks}</span>
            </div>

            <div className={styles.tasksCompleted}>
                Tarefas criadas <span>{countComplitedTask} de {countTasks}</span>
            </div>
        </div>
    )
}