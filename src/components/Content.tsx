import styles from './Content.module.css'

import clipboard from '../assets/clipboard.svg'
import { Task } from './Task'
import { useState } from 'react'
import { FormTask } from './FormTask'

export function Content() {

  const [tasks, setTasks] = useState<string[]>([])

  const handleTaskAdd = (newTask: string) => {
    setTasks([...tasks, newTask])
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete
    })
    setTasks(tasksWithoutDeletedOne)
  }

  let tasksCount = tasks.length;

  return (
    <main className={styles.main}>
      <FormTask onTaskAdd={handleTaskAdd}/>
      <header className={styles.header}>
        <div className={styles.left}>
          <p>Tarefas criadas</p>
          <span>{tasksCount}</span>
        </div>
        <div className={styles.right}>
        <p>Concluídas</p>
          <span>0</span>
        </div>
      </header>
      {tasks.length <= 0 ? (
        <section className={styles.emptyContent}>
          <img src={ clipboard } alt="Ícone de uma prancheta" />
          <p>
            <span>Você ainda não tem tarefas cadastradas</span><br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </section>
      ) : (
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
      )
      }
    </main>
  )
}