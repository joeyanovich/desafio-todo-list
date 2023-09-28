import { FormEvent, useState } from 'react'
import styles from './Todo.module.css'

import { PlusCircle } from "@phosphor-icons/react";
import { Task } from './Task';

export function Todo() {
  const [task, setTask] = useState([''])

  const [newTaskText, setNewTaskText] = useState('')

  // function deleteTask(taskToDelete: string) {
  //   const taskWithoutDeletedOne = task.filter(tasks => {
  //       return tasks !== taskToDelete
  //   })
  //   setTask(taskWithoutDeletedOne)
  // }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTask([...task, newTaskText])
    setNewTaskText('')
  }

  function deleteTask(taskToDelete: string) {
    const taskWithoutDeletedOne = task.filter(tasks => {
        return tasks !== taskToDelete
    })
    setTask(taskWithoutDeletedOne)
}

  return (
    <div>
      <form  onSubmit={handleCreateNewTask} className={styles.form} action="">
        <input type="text" placeholder="Adicione uma nova tarefa"/>
        <button type="submit">
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
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
    </div>
  )
}