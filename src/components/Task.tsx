// import clipboard from '../assets/clipboard.svg'
import { Trash } from "@phosphor-icons/react";

import styles from './Task.module.css'

interface taskProps {
  content: string;
  onDeleteTask: (task: string) => void;
}

export function Task({ content, onDeleteTask }: taskProps) {

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  return (
    <main className={styles.main}>
      <section className={styles.taskSection}>
        <div className={styles.task}>
          <div className={styles.input}>
            <input type="checkbox" />
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