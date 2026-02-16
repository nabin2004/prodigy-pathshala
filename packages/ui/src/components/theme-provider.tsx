"use client"

import * as React from "react"

type Theme = "dark" | "light" | "system"

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
  attribute?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

interface ThemeProviderState {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: "dark" | "light"
}

const ThemeProviderContext = React.createContext<ThemeProviderState | undefined>(
  undefined
)

function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "prodigy-theme",
  attribute = "class",
  enableSystem = true,
  disableTransitionOnChange = false,
  ...props
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = React.useState<"dark" | "light">("light")
  const [mounted, setMounted] = React.useState(false)

  // Read from localStorage on mount
  React.useEffect(() => {
    const stored = localStorage.getItem(storageKey) as Theme | null
    if (stored) {
      setThemeState(stored)
    }
    setMounted(true)
  }, [storageKey])

  // Apply theme to document
  React.useEffect(() => {
    if (!mounted) return

    const root = window.document.documentElement

    const applyTheme = (resolved: "dark" | "light") => {
      if (disableTransitionOnChange) {
        root.style.setProperty("transition", "none")
        // Force reflow
        void root.offsetHeight
      }

      root.classList.remove("light", "dark")
      root.classList.add(resolved)
      setResolvedTheme(resolved)

      if (disableTransitionOnChange) {
        // Re-enable transitions after a frame
        requestAnimationFrame(() => {
          root.style.removeProperty("transition")
        })
      }
    }

    if (theme === "system" && enableSystem) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      applyTheme(systemTheme)
    } else {
      applyTheme(theme === "system" ? "light" : theme)
    }
  }, [theme, mounted, enableSystem, disableTransitionOnChange])

  // Listen for system theme changes
  React.useEffect(() => {
    if (!enableSystem || !mounted) return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        const root = window.document.documentElement
        root.classList.remove("light", "dark")
        const resolved = e.matches ? "dark" : "light"
        root.classList.add(resolved)
        setResolvedTheme(resolved)
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme, enableSystem, mounted])

  const setTheme = React.useCallback(
    (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme)
      setThemeState(newTheme)
    },
    [storageKey]
  )

  // Prevent flash of wrong theme
  if (!mounted) {
    return (
      <ThemeProviderContext.Provider
        value={{ theme, setTheme, resolvedTheme: "light" }}
      >
        <div style={{ visibility: "hidden" }}>{children}</div>
      </ThemeProviderContext.Provider>
    )
  }

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

function useTheme() {
  const context = React.useContext(ThemeProviderContext)
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")
  return context
}

export { ThemeProvider, useTheme }
export type { Theme }
