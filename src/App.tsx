import {createMuiTheme, CssBaseline, ThemeProvider} from "@material-ui/core"
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import React, {useState} from "react"
import {BrowserRouter} from "react-router-dom"
import About from "./features/about/About"
import Blog from "./features/blog/Blog"
import PrivacyPolicy from "./features/legal/PrivacyPolicy"
import TermsAndConditions from "./features/legal/TermsAndConditions"
import Post from "./features/posts/Post"
import WhatsNewAndroid from "./features/projects/oceanlife/WhatsNew"
import Footer from "./features/shared/Footer"
import Header from "./features/shared/Header"
import Talks from "./features/talks/Talks"
import Routes from "./routes/Routes"
import defaultTheme from "./theme"

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
  {
    title: "OceanLife Privacy Policy",
    component: PrivacyPolicy,
    parentPath: "/oceanlife",
    path: "/privacy-policy",
  },
  {
    title: "OceanLife Ts&Cs",
    component: TermsAndConditions,
    parentPath: "/oceanlife",
    path: "/terms-and-conditions",
  },
  {
    title: "OceanLife What's New on Android",
    component: WhatsNewAndroid,
    parentPath: "/oceanlife",
    path: "/whats-new-android",
  },
]

function useDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", defaultTheme)
  const toggleDarkMode = () => {
    const type = theme.palette.type
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
  const [updatedTheme, toggleDarkMode] = useDarkMode()

  const showHeaderAndFooter =
    document.URL.match(
      "(terms-and-conditions|privacy-policy|whats-new-android)",
    ) == null
  return (
    <ThemeProvider
      theme={createMuiTheme({
        ...updatedTheme.typography,
        ...updatedTheme.palette,
        palette: {
          type: updatedTheme.palette.type,
          primary: updatedTheme.palette.primary,
          divider: updatedTheme.palette.divider,
        },
      })}
    >
      <CssBaseline />
      <Container>
        <Box my={4}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            {showHeaderAndFooter ? (
              <Header
                title="Branton's Yak"
                sections={primaryRoutes}
                appliedPaletteType={updatedTheme.palette.type}
                handleThemeSwitch={toggleDarkMode as () => void}
              />
            ) : null}
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
          {showHeaderAndFooter ? (
            <Footer title="Tech, Teams & Tea" description="" />
          ) : null}
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
