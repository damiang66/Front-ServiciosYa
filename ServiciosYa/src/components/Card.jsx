import styles from './components.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNotdef } from '@fortawesome/free-solid-svg-icons'

function Card() {
    return (
        <figure className={styles["card"]}>
            <FontAwesomeIcon icon={faNotdef} className={styles['icon']}/>       
                 <figcaption>
                <p>Servicio #</p>
            </figcaption>
        </figure>
    )
}

export default Card
