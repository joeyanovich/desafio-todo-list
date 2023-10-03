import { FormEvent, useState } from 'react';
import styles from './FormTask.module.css'
import { PlusCircle } from "@phosphor-icons/react";

interface FormTaskProps {
  onTaskAdd: (newTask: string) => void;
  // count: number; //aqui
}

export function FormTask({ onTaskAdd }: FormTaskProps) {
  // const [tasksCount, setTasksCount] = useState(0)

  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    onTaskAdd(newTaskText)
    setNewTaskText('')
  }

  // function handleTasksCount() {
  //   setTasksCount((state) => {
  //     return state + 1
  //     })
  //   }

  return (
      <form onSubmit={handleCreateNewTask} className={styles.form}>
        <input
          type="text"
          placeholder='Adicione uma nova tarefa'
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <button>
          Criar
          <PlusCircle className={styles.icon}/>
        </button>
      </form>
  )
}