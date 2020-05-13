import React, {FunctionComponent} from "react"
import {Switch, Route} from "react-router-dom"
import {RouteComponentProps} from "react-router"

interface Props {
  primaryRoutes: Array<{
    path: string
    component: FunctionComponent<RouteComponentProps>
  }>
  secondaryRoutes: Array<{
    parentPath: string
    path: string
    component: FunctionComponent<RouteComponentProps>
  }>
}

export default function Routes(props: Props) {
  return (
    <Switch>
      {props.primaryRoutes.map((route) => (
        <Route
          path={route.path}
          exact
          component={route.component}
          key={route.path}
        />
      ))}
      {props.secondaryRoutes.map((route) => (
        <Route
          path={`${route.parentPath}${route.path}`}
          component={route.component}
          key={route.parentPath + route.path}
        ></Route>
      ))}
    </Switch>
  )
}
