import React from "react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Footer from "./features/blog/Footer"
import Routes from "./routes/Routes"
import {Router} from "react-router-dom"
import history from "./routes/history"
import Header from "./features/blog/Header"

const sections = [
  {title: "Posts", url: "/blog"},
  {title: "Talks", url: "/blog/talks"},
  {title: "Portfolio", url: "/blog/portfolio"},
]

export default function App() {
  return (
    <Router history={history}>
      <Container>
        <Box my={4}>
          <Header title="Branton's Yak" sections={sections} />
          <Routes />
          <Footer title="Tech, Teams & Tea" description="" />
        </Box>
      </Container>
    </Router>
  )
}
