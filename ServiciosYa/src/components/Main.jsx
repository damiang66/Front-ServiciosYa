import Card from './Card'
import styles from './components.module.css'
import ProfessionaCard from './ProfessionaCard'

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
      <section className={styles["seccion"]}></section>
      <section className={styles["seccion"]}></section>
    </main>
  )
}

export default Main
