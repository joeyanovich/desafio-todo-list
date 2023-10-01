import styles from './Header.module.css'
import logo from '../assets/rocket.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={ logo } alt="Logotipo do site (um foguete de cor azul e roxo)" />
      <p>to<span>do</span></p>
    </header>
  )
}