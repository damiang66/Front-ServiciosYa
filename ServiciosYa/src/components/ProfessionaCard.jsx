import styles from './components.module.css'

function ProfessionaCard() {
  return (
    <figure className={styles['card']}>
        <img src="/NotFound.jpeg" alt="Proffesional-IMG" />
      <figcaption>
        <h2>Nombre</h2>
        <span>rating</span>
        <span>Descripcion y presentacion de el perfil</span>
      </figcaption>
    </figure>
  )
}

export default ProfessionaCard
