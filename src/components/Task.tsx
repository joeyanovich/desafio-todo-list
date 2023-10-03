// import clipboard from '../assets/clipboard.svg'
import { Trash } from "@phosphor-icons/react";

import styles from './Task.module.css'
import { useState } from "react";

interface taskProps {
  content: string;
  onDeleteTask: (task: string) => void;
  onTaskComplete: (isCompleted: boolean) => void;
}

export function Task({ content, onDeleteTask, onTaskComplete }: taskProps) {
  const [isCompleted, setIsCompleted] = useState(false)

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  function handleCompletedTask(event: React.ChangeEvent<HTMLInputElement>) {
    const completed = event.target.checked
    setIsCompleted(completed)
    onTaskComplete(completed)
  }

  return (
    <main className={styles.main}>
      <section className={styles.taskSection}>
        <div className={styles.task}>
          <div className={styles.input}>
            <input 
              type="checkbox"
              checked={isCompleted}
              onChange={handleCompletedTask}
            />
            <p>{content}</p>
          </div>
          <button
            onClick={ handleDeleteTask }
            className={styles.icon}
            title={"Deletar Tarefa"}
          >
            <Trash />
          </button>
        </div>
      </section>
    </main>
  )
}