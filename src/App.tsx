import React, {useState} from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Footer from "./features/blog/Footer"
import Routes from "./routes/Routes"
import {BrowserRouter} from "react-router-dom"
import Header from "./features/blog/Header"
import Blog from "./features/blog/Blog"
import Talks from "./features/talks/Talks"
import {
  ThemeProvider,
  CssBaseline,
  createMuiTheme,
  Theme,
} from "@material-ui/core"
import About from "./features/about/About"

const sections = [
  {title: "Posts", component: Blog, path: "/"},
  {title: "Talks", component: Talks, path: "/talks"},
  {title: "About", component: About, path: "/about"},
]

const defaultBlogThemeObject = {
  palette: {
    type: "light",
  },
}

function useDarkMode() {
  const [theme, setTheme] = useState(defaultBlogThemeObject)
  const toggleDarkMode = () => {
    const {
      palette: {type},
    } = theme
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === "light" ? ("dark" as const) : ("light" as const),
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
          type: (theme as Theme).palette.type,
        },
      })}
    >
      <CssBaseline />
      <Container>
        <Box my={4}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header
              title="Branton's Yak"
              sections={sections}
              appliedPaletteType={(theme as Theme).palette.type}
              handleThemeSwitch={toggleDarkMode as () => void}
            />
            <Routes
              routes={sections.map((section) => ({
                path: section.path,
                component: section.component,
              }))}
            />
          </BrowserRouter>
          <Footer title="Tech, Teams & Tea" description="" />
        </Box>
      </Container>
    </ThemeProvider>
  )
}
