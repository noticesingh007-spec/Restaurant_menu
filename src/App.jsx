import { useState, useEffect, useRef } from 'react'
import { menuData } from './menuData'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import CategoryCard from './components/CategoryCard'
import Footer from './components/Footer'
import FAB from './components/FAB'

export default function App() {
  const [activeId, setActiveId] = useState(menuData[0].id)
  const [fabVisible, setFabVisible] = useState(false)
  const sectionRefs = useRef({})

  useEffect(() => {
    // Intersection observer for active nav highlight
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { threshold: 0.35 }
    )

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // FAB visibility on scroll
    const handleScroll = () => setFabVisible(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Hero />
      <NavBar activeId={activeId} />
      <main style={{ padding: '0 0 60px' }}>
        {menuData.map((cat) => (
          <div
            key={cat.id}
            ref={(el) => (sectionRefs.current[cat.id] = el)}
            id={cat.id}
          >
            <CategoryCard category={cat} />
          </div>
        ))}
      </main>
      <Footer />
      <FAB visible={fabVisible} />
    </>
  )
}
