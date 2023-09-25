import styles from './Todo.module.css'

import { PlusCircle } from "@phosphor-icons/react";

export function Todo() {
  return (
    <div>
      <form  className={styles.form} action="">
        <input type="text" placeholder="Adicione uma nova tarefa"/>
        <button type="submit">
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
    </div>
  )
}