// src/components/transitions/IntroTransition.jsx
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useLogoTarget } from '../../context/LogoTargetContext'
import '../../styles/IntroTransition.css'

const BASE = import.meta.env.BASE_URL

const RUN_MODE = 'session'
const SESSION_KEY = 'imtp_intro_ran_v6'

// Tamaño base = el del header (tu CSS usa height: 96px)
const BASE_H = 96
const START_H = 120
const START_SCALE = START_H / BASE_H

export default function IntroTransition() {
  const location = useLocation()
  const { getTargetRect } = useLogoTarget()
  const controls = useAnimationControls()

  const [show, setShow] = useState(false)
  const [final, setFinal] = useState(null)
  const [center, setCenter] = useState({ x: 0, y: 0 })

  const headerElRef = useRef(null)
  const prevStylesRef = useRef(null)

  const shouldRun = useMemo(() => {
    if (RUN_MODE === 'always') return true
    return !sessionStorage.getItem(SESSION_KEY)
  }, [location.key])

  const hardHideHeader = () => {
    const headerEl = document.querySelector('.header') || document.querySelector('header')
    if (!headerEl) return

    headerElRef.current = headerEl
    prevStylesRef.current = {
      opacity: headerEl.style.opacity,
      visibility: headerEl.style.visibility,
      pointerEvents: headerEl.style.pointerEvents,
      transition: headerEl.style.transition
    }

    headerEl.style.transition = 'none'
    headerEl.style.opacity = '0'
    headerEl.style.visibility = 'hidden'
    headerEl.style.pointerEvents = 'none'
  }

  const restoreHeader = () => {
    const headerEl = headerElRef.current
    const prev = prevStylesRef.current
    if (!headerEl || !prev) return

    headerEl.style.opacity = prev.opacity
    headerEl.style.visibility = prev.visibility
    headerEl.style.pointerEvents = prev.pointerEvents
    headerEl.style.transition = prev.transition

    headerElRef.current = null
    prevStylesRef.current = null
  }

  // centro de pantalla
  useLayoutEffect(() => {
    const setC = () =>
      setCenter({
        x: Math.round(window.innerWidth / 2),
        y: Math.round(window.innerHeight / 2)
      })
    setC()
    window.addEventListener('resize', setC)
    return () => window.removeEventListener('resize', setC)
  }, [])

  // medir target + prender overlay
  useLayoutEffect(() => {
    if (!shouldRun) return

    document.documentElement.classList.add('intro-running')
    hardHideHeader()

    let canceled = false
    let tries = 0

    const measure = () => {
      if (canceled) return

      const rect = getTargetRect()
      if (rect) {
        const x = Math.round(rect.left + rect.width / 2)
        const y = Math.round(rect.top + rect.height / 2)
        const targetH = Math.max(24, Math.round(rect.height))

        setFinal({
          x,
          y,
          scale: targetH / BASE_H
        })

        setShow(true)

        if (RUN_MODE === 'session') {
          sessionStorage.setItem(SESSION_KEY, '1')
        }
        return
      }

      tries += 1
      if (tries < 30) requestAnimationFrame(measure)
      else {
        document.documentElement.classList.remove('intro-running')
        restoreHeader()
        setShow(false)
      }
    }

    requestAnimationFrame(measure)

    return () => {
      canceled = true
      document.documentElement.classList.remove('intro-running')
      restoreHeader()
    }
  }, [shouldRun, getTargetRect, location.key])

  // secuencia: aparecer -> mover/escala -> cerrar
  useEffect(() => {
    if (!show || !final || !center.x || !center.y) return

    let alive = true

    const run = async () => {
      try {
        controls.set({
          x: center.x,
          y: center.y,
          scale: START_SCALE,
          opacity: 0,
          filter: 'blur(10px)'
        })

        await controls.start({
          opacity: 1,
          filter: 'blur(0px)',
          transition: { duration: 0.22, ease: 'easeOut' }
        })

        await controls.start({
          x: final.x,
          y: final.y,
          scale: final.scale,
          transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }
        })
      } finally {
        if (!alive) return
        document.documentElement.classList.remove('intro-running')
        restoreHeader()
        setShow(false)
      }
    }

    run()
    return () => {
      alive = false
    }
  }, [show, final, center, controls])

  return (
    <AnimatePresence>
      {show && final && (
        <motion.div className="intro" initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="intro__bg" />

          <motion.div
            className="intro__wipe"
            initial={{ scaleY: 1, originY: 1 }}
            animate={{
              scaleY: 0,
              transition: { duration: 0.75, ease: [0.2, 0.8, 0.2, 1], delay: 0.18 }
            }}
          />

          {/* ✅ UN SOLO LOGO: x/y + scale (sin width/height) */}
          <motion.img
            className="intro__logo"
            src={`${BASE}assets/images/logo-color.png`}
            alt="IMTP Studios"
            draggable="false"
            style={{
              left: 0,
              top: 0,
              height: `${BASE_H}px`,
              width: 'auto',
              transform: 'translate(-50%, -50%)'
            }}
            // ✅ evita transforms 3D raros; mantiene orden estable
            transformTemplate={({ x, y, scale }, generated) => {
              // Motion pasa strings tipo "100px" en algunos casos; normalizamos:
              const tx = typeof x === 'number' ? `${x}px` : x
              const ty = typeof y === 'number' ? `${y}px` : y
              const sc = typeof scale === 'number' ? scale : 1
              return `translate(${tx}, ${ty}) translate(-50%, -50%) scale(${sc})`
            }}
            animate={controls}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
