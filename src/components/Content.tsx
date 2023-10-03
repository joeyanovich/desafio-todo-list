import styles from './Content.module.css'

import clipboard from '../assets/clipboard.svg'
import { Task } from './Task'
import { useState } from 'react'
import { FormTask } from './FormTask'

export function Content() {
  const [completedTaskCount, setCompletedTaskCount] = useState(0)

  const [tasks, setTasks] = useState<string[]>([])

  const handleTaskAdd = (newTask: string) => {
    setTasks([...tasks, newTask])
  }

  function deleteTask(taskToDelete: string) {
    const taskIndex = tasks.findIndex(task => task === taskToDelete)
    if (taskIndex !== -1) {
      const isTaskCompleted = taskIndex < completedTaskCount
    
      const tasksWithoutDeletedOne = tasks.filter((_, index) => index !== taskIndex)
      setTasks(tasksWithoutDeletedOne)

      if (isTaskCompleted) {
        setCompletedTaskCount(prevCount => prevCount - 1)
      }
    }
  }

  function handleTaskComplete(isCompleted: boolean) {
    setCompletedTaskCount(prevCount => isCompleted ? prevCount + 1 : prevCount -1)
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
        {
          completedTaskCount > 0 ? (
            <span>{completedTaskCount} de {tasks.length}</span>
          ) : (
            <span>0</span>
          )
        }
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
              onTaskComplete={handleTaskComplete}
            />
          )
        })}
      </div>
      )
      }
    </main>
  )
}