"use client"

import * as React from "react"

type Theme = "light" | "dark"

type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>("light")
  const [mounted, setMounted] = React.useState(false)

  const setTheme = React.useCallback((newTheme: Theme) => {
    setThemeState(newTheme)
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme)
      document.documentElement.classList.remove("light", "dark")
      document.documentElement.classList.add(newTheme)
    }
  }, [])

  React.useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme = stored || (prefersDark ? "dark" : "light")

    setThemeState(initialTheme)
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(initialTheme)
    setMounted(true)
  }, [])

  const value = React.useMemo(() => ({ theme, setTheme }), [theme, setTheme])

  // Always render children, but provide a default value before mount
  return (
    <ThemeContext.Provider value={mounted ? value : { theme: "light", setTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  )
}
