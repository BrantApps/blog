import React from "react"
import {Switch, Route} from "react-router-dom"
import Blog from "../features/blog/Blog"
import Talks from "../features/talks/Talks"

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Blog} />
      <Route path="/talks" exact component={Talks} />
      <Route path="/portfolio" exact component={Blog} />
    </Switch>
  )
}
