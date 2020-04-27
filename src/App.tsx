import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Footer from "./features/blog/Footer"
import Routes from "./routes/Routes"
import {BrowserRouter} from "react-router-dom"
import Header from "./features/blog/Header"
import Blog from "./features/blog/Blog"
import Talks from "./features/talks/Talks"

const sections = [
  {title: "Posts", component: Blog, path: "/"},
  {title: "Talks", component: Talks, path: "/talks"},
  {
    title: "Portfolio",
    component: Blog,
    path: "/portfolio",
  },
]

export default function App() {
  return (
    <Container>
      <Box my={4}>
        <Header title="Branton's Yak" sections={sections} />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
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
  )
}
