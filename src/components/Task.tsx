import styles from './Task.module.css'
import clipboard from '../../public/clipboard.svg'
import { Trash } from '@phosphor-icons/react'

export function Task() {
    return(
        <main className={styles.main}>
            <header>
                <div className={styles.left}>
                    <p>Tarefas criadas</p>
                    <span>0</span>
                </div>
                <div className={styles.right}>
                    <p>Concluídas</p>
                    <span>0</span>
                </div>
            </header>
            <section className={styles.empty}>
                <div className={styles.emptyContent}>
                    <img src={ clipboard } alt="" />
                    <p>
                        Você ainda não tem tarefas cadastradas <br />
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </p>
                </div>
            </section>
            <section className={styles.tasks}>
                <div className={styles.tasksContent}>
                    <input type="checkbox" className={styles.checkbox}/>
                    <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                    <Trash className={styles.trash} size={18} />
                </div>
            </section>
        </main>
    )
}