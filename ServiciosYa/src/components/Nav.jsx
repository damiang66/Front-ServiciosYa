import { Link } from "react-router-dom"
import styles from "./components.module.css"

function Nav() {
  return (
    <div className={styles["navLinks"]}>
      <Link to="/" ><img src="/search.svg" alt="search" /></Link>
      <Link to="/" >LogIn</Link>
      <Link to="/" >Register</Link>
    </div>
  )
}

export default Nav