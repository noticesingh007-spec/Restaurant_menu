import MenuItem from './MenuItem'
import styles from './CategoryCard.module.css'

export default function CategoryCard({ category }) {
  return (
    <section className={styles.card} id={category.id}>
      <div className={styles.header}>
        <span className={styles.icon}>{category.icon}</span>
        <span className={styles.title}>{category.title}</span>
      </div>
      <div className={styles.body}>
        {category.items.map((item, idx) =>
          item.type === 'subheading' ? (
            <div key={idx} className={styles.subheading}>{item.label}</div>
          ) : (
            <MenuItem key={idx} item={item} />
          )
        )}
      </div>
    </section>
  )
}
