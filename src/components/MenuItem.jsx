import styles from './MenuItem.module.css'

export default function MenuItem({ item }) {
  return (
    <div className={styles.item}>
      <span className={styles.name}>
        {item.name}
        {item.sub && <small className={styles.sub}>{item.sub}</small>}
      </span>
      <span className={styles.price}>₹{item.price}</span>
    </div>
  )
}
