// import styles from './Todo.module.css'

import { PlusCircle } from "@phosphor-icons/react";

export function Todo() {
  return (
    <div>
      <form action="">
        <input type="text" />
        <button type="submit">
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
    </div>
  )
}