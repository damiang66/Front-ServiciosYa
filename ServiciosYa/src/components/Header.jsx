import { Link } from 'react-router-dom'
import styles from './components.module.css'
import Nav from './Nav.jsx'

function Header() {
  return (
    <header className={styles["header"]}>
      <div className={styles["headerContainer"]}>
        <Link to="/">
          <figure>
            <img src="/user-tie-solid.svg" alt="" />
            <figcaption><h2>ServiciosYa</h2></figcaption>
          </figure>
        </Link>
        <Nav />
      </div>
    </header>
  )
}

export default Header
