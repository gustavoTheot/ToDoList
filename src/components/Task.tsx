import { Trash } from 'phosphor-react';
import { ChangeEvent } from 'react';
import styles from './Task.module.css'

interface StatusCheckedProps{
    id: string;
    isComplited: boolean;
}

interface TaskProps{
    id: string,
    title: string;
    onDeleteTask: (description : string) => void;
    onChangeChecked: ({id, isComplited} : StatusCheckedProps) => void;
}

export function Task({id, title, onDeleteTask, onChangeChecked} : TaskProps){

    function handleDeleteTask(){
        onDeleteTask(title)
    }

    function onChangeTaskComplited(event : ChangeEvent<HTMLInputElement>){
        onChangeChecked({id, isComplited : event.target.checked})
    }

    return(
        <main className={styles.mainViewTask}>
            <div className={styles.boxTask}>
                <div className={styles.valuesTheTask}>
                    <input 
                        id={id}
                        type="checkbox" 
                        onChange={onChangeTaskComplited}
                    />
                    <p>{title}</p>
                </div>
                <button onClick={handleDeleteTask} className={styles.buttonDelete}>
                    <Trash size={16}/>
                </button>
            </div>
        </main>
    )
}