import React, {useState} from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Footer from "./window/Footer"
import Routes from "./routes/Routes"
import {BrowserRouter} from "react-router-dom"
import Header from "./window/Header"
import Blog from "./features/blog/Blog"
import Talks from "./features/talks/Talks"
import {
  ThemeProvider,
  CssBaseline,
  createMuiTheme,
  Theme,
} from "@material-ui/core"
import About from "./features/about/About"
import defaultTheme from "./theme"
import Post from "./features/posts/Post"

const primaryRoutes = [
  {title: "Posts", component: Blog, path: "/"},
  {title: "Talks", component: Talks, path: "/talks"},
  {title: "About", component: About, path: "/about"},
]

const secondaryRoutes = [
  {
    title: "Post",
    component: Post,
    parentPath: "/posts",
    path: "/:id",
  },
]

function useDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", defaultTheme)
  const toggleDarkMode = () => {
    console.log(theme.palette.primary.light)
    const {
      palette: {type},
    } = theme
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === "light" ? ("dark" as const) : ("light" as const),
        primary: {
          main:
            type === "light" ? "#FFFFFF" : defaultTheme.palette.primary.main,
        },
      },
    }
    setTheme(updatedTheme)
  }

  return [theme, toggleDarkMode]
}

export default function App() {
  const [theme, toggleDarkMode] = useDarkMode()
  return (
    <ThemeProvider
      theme={createMuiTheme({
        palette: {
          type: theme.palette.type,
          primary: theme.palette.primary,
        },
      })}
    >
      <CssBaseline />
      <Container>
        <Box my={4}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header
              title="Branton's Yak"
              sections={primaryRoutes}
              appliedPaletteType={(theme as Theme).palette.type}
              handleThemeSwitch={toggleDarkMode as () => void}
            />
            <Routes
              primaryRoutes={primaryRoutes.map((section) => ({
                path: section.path,
                component: section.component,
              }))}
              secondaryRoutes={secondaryRoutes.map((subSections) => ({
                parentPath: subSections.parentPath,
                path: subSections.path,
                component: subSections.component,
              }))}
            />
          </BrowserRouter>
          <Footer title="Tech, Teams & Tea" description="" />
        </Box>
      </Container>
    </ThemeProvider>
  )
}

function useLocalStorage(key: string, initialValue: object) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key)
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error also return initialValue
      console.log(error)
      return initialValue
    }
  })

  const setValue = (value: object) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error)
    }
  }

  return [storedValue, setValue]
}
