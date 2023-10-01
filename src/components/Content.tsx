import styles from './Content.module.css'

import clipboard from '../assets/clipboard.svg'
import { Task } from './Task'
import { useState } from 'react'
import { FormTask } from './FormTask'

export function Content() {

  const [tasks, setTasks] = useState([''])

  const handleTaskAdd = (newTask: string) => {
    setTasks([...tasks, newTask])
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete
    })
    setTasks(tasksWithoutDeletedOne)
  }

  return (
    <main className={styles.main}>
      <FormTask onTaskAdd={handleTaskAdd}/>
      <header className={styles.header}>
        <div className={styles.left}>
          <p>Tarefas criadas</p>
          <span>0</span>
        </div>
        <div className={styles.right}>
        <p>Concluídas</p>
          <span>0</span>
        </div>
      </header>
      <section className={styles.emptyContent}>
        <img src={ clipboard } alt="Ícone de uma prancheta" />
        <p>
          <span>Você ainda não tem tarefas cadastradas</span><br />
          Crie tarefas e organize seus itens a fazer
        </p>
      </section>
      <div className={styles.taskList}>
        {tasks.map(task => {
          return (
            <Task
              key={task}
              content={task}
              onDeleteTask={deleteTask}
            />
          )
        })}
      </div>
    </main>
  )
}