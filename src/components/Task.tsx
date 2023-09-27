import { Trash } from '@phosphor-icons/react'

import styles from './Task.module.css'

export function Task() {
    return(
        <main>
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
            <div className={styles.tasks}>
                <div className={styles.tasksContent}>
                    <input type="checkbox" className={styles.checkbox}/>
                    <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                    <div className={styles.trash}>
                        <Trash size={18}/>
                    </div>
                </div>
            </div>
            <div className={styles.tasks}>
                <div className={styles.tasksContent}>
                    <input type="checkbox" className={styles.checkbox}/>
                    <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                    <div className={styles.trash}>
                        <Trash size={18}/>
                    </div>
                </div>
            </div>
        </main>
        
    )
}