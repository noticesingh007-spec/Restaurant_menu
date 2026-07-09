import styles from './FAB.module.css'

export default function FAB({ visible }) {
  return (
    <button
      className={`${styles.fab} ${visible ? styles.visible : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      ↑
    </button>
  )
}
