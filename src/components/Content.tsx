// import { FormEvent, useState } from 'react'
import {  useState } from 'react'
import clipboard from '../../public/clipboard.svg'

import styles from './Content.module.css'
import { Task } from './Task'

export function Content() {
    const [task, setTask] = useState([''])

    // const [newTaskText, setNewTaskText] = useState('')

    // function handleCreateNewTask(event: FormEvent) {
    //     event.preventDefault()

    //     setTask([...task, newTaskText])
    // }

    function deleteTask(taskToDelete: string) {
        const taskWithoutDeletedOne = task.filter(tasks => {
            return tasks !== taskToDelete
        })
        setTask(taskWithoutDeletedOne)
    }

    return(
        <main className={styles.main}>
            <div className={styles.empty}>
                <div className={styles.emptyContent}>
                    <img src={ clipboard } alt="" />
                    <p>
                        Você ainda não tem tarefas cadastradas <br />
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </p>
                </div>
            </div>
            <div className={styles.taskList}>
                {task.map(tasks => {
                    return (
                        <Task
                            key={tasks}
                            content={tasks}
                            onDeleteTask={deleteTask}
                        />
                    )
                })}
                
            </div>
        </main>
    )
}