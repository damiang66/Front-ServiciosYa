import styles from './components.module.css'

function Banner({firstText, secondText}) {
  return (
    <div className={styles["banner"]}>
      <h1>{firstText}</h1>
      <h1>{secondText}</h1>
    </div>
  )
}

export default Banner
