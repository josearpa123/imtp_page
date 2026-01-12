// src/context/LogoTargetContext.jsx
import { createContext, useContext, useMemo, useRef } from 'react'

const LogoTargetContext = createContext(null)

export function LogoTargetProvider({ children }) {
  const logoRef = useRef(null)

  const api = useMemo(() => {
    return {
      logoRef,
      getTargetRect: () => {
        const el = logoRef.current
        if (!el) return null
        return el.getBoundingClientRect()
      }
    }
  }, [])

  return (
    <LogoTargetContext.Provider value={api}>
      {children}
    </LogoTargetContext.Provider>
  )
}

export function useLogoTarget() {
  const ctx = useContext(LogoTargetContext)
  if (!ctx) throw new Error('useLogoTarget debe usarse dentro de <LogoTargetProvider />')
  return ctx
}
