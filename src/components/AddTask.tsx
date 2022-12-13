import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'

import styles from './AddTask.module.css'

interface CreateTaskProps{
    createTask: (taskTitle : string) => void;
}

export function AddTask({createTask} : CreateTaskProps){
    const [newTask, setNewTask] = useState('')

    function handleCreateNewTask(event : FormEvent){
        event.preventDefault();

        createTask(newTask)
        setNewTask('')
    }

    function handleNewTaskChange(event : ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('')
        setNewTask(event.target.value)
    }

    return(
        <div>
            <header>
                <form className={styles.inputTask} onSubmit={handleCreateNewTask}>
                    <input 
                        type="text"
                        name="task"
                        value={newTask}
                        onChange={handleNewTaskChange}
                        placeholder='Adicione uma nova tarefa'
                        required
                    />


                    <button type='submit'>
                        <div className={styles.createButton}>
                            Criar
                            <PlusCircle size={16}/>
                        </div>
                    </button>
                </form>
            </header>

        </div>
    )
}