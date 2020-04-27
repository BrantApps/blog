import React, {FunctionComponent} from "react"
import {Switch, Route} from "react-router-dom"
import {RouteComponentProps} from "react-router"

interface Props {
  routes: Array<{
    path: string
    component: FunctionComponent<RouteComponentProps>
  }>
}

export default function Routes(props: Props) {
  return (
    <Switch>
      {props.routes.map((route) => (
        <Route
          path={route.path}
          exact
          component={route.component}
          key={route.path}
        />
      ))}
    </Switch>
  )
}
