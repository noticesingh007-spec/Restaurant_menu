import { useEffect, useRef } from 'react'
import { menuData } from '../menuData'
import styles from './NavBar.module.css'

export default function NavBar({ activeId }) {
  const btnRefs = useRef({})

  useEffect(() => {
    const btn = btnRefs.current[activeId]
    if (btn) btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [activeId])

  function jumpTo(id) {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className={styles.navWrap} aria-label="Menu categories">
      <div className={styles.navScroll}>
        {menuData.map((cat) => (
          <button
            key={cat.id}
            ref={(el) => (btnRefs.current[cat.id] = el)}
            className={`${styles.navBtn} ${activeId === cat.id ? styles.active : ''}`}
            onClick={() => jumpTo(cat.id)}
          >
            {cat.navLabel}
          </button>
        ))}
      </div>
    </nav>
  )
}
