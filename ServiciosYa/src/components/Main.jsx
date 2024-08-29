import Card from './Card'
import ProfessionaCard from './ProfessionaCard'
import styles from './components.module.css'

function Main() {
  return (
    <main>
      <section className={styles["service-cards"]}>
        <h1>Nuestros Servicios</h1>
        <div className={styles["cards"]}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <section className={styles["professional-Cards"]}>
        <h1>Conoce nuestros profesionales</h1>
        <div className={styles["cards"]}>
          <ProfessionaCard />
          <ProfessionaCard />
          <ProfessionaCard />
          <ProfessionaCard />
        </div>
      </section>
      <section className={styles["user-review"]}>
        <p>
          *Review positiva de un usuario agradecido y satisfecho con el servicio y el profesional que fue enviado a su hogar*
          <strong>-Usuario satisfecho*</strong>
        </p>
      </section>
      <section className={styles["seccion"]}></section>
    </main>
    
  )
}

export default Main
