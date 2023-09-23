import logo from '../../public/rocket.svg'

import styles from './Header.module.css'

export function Header(){
    return (
        <header className={styles.header}>
            <img src={ logo } alt="Logotipo do ToDo List (um foguete)" />
            <p>to<span>do</span></p>
        </header>
    )
}