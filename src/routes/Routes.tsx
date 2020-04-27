import React from "react"
import {Switch, Route} from "react-router-dom"
import Blog from "../features/blog/Blog"
import Talks from "../features/talks/Talks"

export default function Routes() {
  return (
    <Switch>
      <Route path="/blog" exact component={Blog} />
      <Route path="/blog/talks" exact component={Talks} />
      <Route path="/blog/portfolio" exact component={Blog} />
    </Switch>
  )
}
