import { useState } from "react"
import { v4 as uuidv4 } from "uuid";
import { AddTask } from "./AddTask";
import { StatusTasks } from "./StatusTasks"
import { Task } from "./Task"

interface StatusProps{
    id: string;
    isComplited: boolean;
}

interface TasksProps{
    id: string;
    title: string;
    isComplited: boolean;
}

export function TaskBoard(){
    const [tasks, setTasks] = useState<TasksProps[]>([])

    function createTasks(titleTask : string){
        setTasks([
            ...tasks,
            {
                id: uuidv4(),
                title: titleTask,
                isComplited: false,
            },
        ])
    }

    function onDeleteTask(descrpitionDelete : string){
        const taskWithhourDeleOne = tasks.filter(task => {
            return task.title != descrpitionDelete
        })
        setTasks(taskWithhourDeleOne)
    }

    function onChangeStatusTasks({id, isComplited} : StatusProps){
        const modifiedState = [...tasks]
        const filterTasks = tasks.findIndex((task) => task.id === id)
        modifiedState[filterTasks].isComplited = isComplited

        setTasks(modifiedState)
    }

    const tasksComplited = tasks.filter(task => task.isComplited == true);

    return(
        <main>
            <AddTask 
                createTask={createTasks}
            />
            <StatusTasks
                countTasks={tasks.length}
                countComplitedTask={tasksComplited.length}
            />
            {
                tasks.map((task) => {
                    return(
                        <li style={{ listStyleType: 'none'}} key={task.id}>
                             <Task
                            id={task.id}
                            title={task.title}
                            onDeleteTask={onDeleteTask}
                            onChangeChecked={(onChangeStatusTasks)}
                            />
                        </li>
                    )
                })
            }
        </main>
    )
}