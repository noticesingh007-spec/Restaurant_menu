import styles from './Hero.module.css'

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>Lalghat Cafe</h1>
        <p className={styles.sub}>Fresh &bull; Homemade &bull; Delicious</p>
        <div className={styles.line} />
      </div>
    </header>
  )
}
