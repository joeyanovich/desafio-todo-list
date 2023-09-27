import clipboard from '../../public/clipboard.svg'

import styles from './Content.module.css'
import { Task } from './Task'

export function Content() {
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
            <Task />
        </main>
    )
}