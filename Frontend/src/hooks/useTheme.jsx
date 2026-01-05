import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'imtp-theme'
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
}

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [themePreference, setThemePreference] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored || THEMES.SYSTEM
  })

  const [activeTheme, setActiveTheme] = useState(THEMES.LIGHT)

  // Sistema (dark/light) si preference = system
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const update = () => {
      if (themePreference === THEMES.SYSTEM) {
        setActiveTheme(mediaQuery.matches ? THEMES.DARK : THEMES.LIGHT)
      }
    }

    update()
    mediaQuery.addEventListener?.('change', update)
    return () => mediaQuery.removeEventListener?.('change', update)
  }, [themePreference])

  // Si preference no es system, forzar activeTheme
  useEffect(() => {
    if (themePreference === THEMES.DARK) setActiveTheme(THEMES.DARK)
    if (themePreference === THEMES.LIGHT) setActiveTheme(THEMES.LIGHT)
  }, [themePreference])

  // Aplicar al DOM
  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', activeTheme === THEMES.DARK ? 'dark' : 'light')
  }, [activeTheme])

  const setTheme = (newTheme) => {
    if (!Object.values(THEMES).includes(newTheme)) return
    setThemePreference(newTheme)
    localStorage.setItem(STORAGE_KEY, newTheme)
  }

  const toggleTheme = () => {
    setTheme(activeTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK)
  }

  const value = useMemo(() => ({
    theme: activeTheme,
    themePreference,
    setTheme,
    toggleTheme,
    isDark: activeTheme === THEMES.DARK,
  }), [activeTheme, themePreference])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme debe usarse dentro de ThemeProvider')
  return ctx
}
