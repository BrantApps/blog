import React from "react"
import ReactMarkdown from "markdown-to-jsx"
import {withStyles, Theme} from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"

const styles = (_: Theme) => ({})

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h5",
      },
    },
    h2: {component: Typography, props: {gutterBottom: true, variant: "h6"}},
    h3: {
      component: Typography,
      props: {gutterBottom: true, variant: "subtitle1"},
    },
    h4: {
      component: Typography,
      props: {gutterBottom: true, variant: "caption", paragraph: true},
    },
    p: {component: Typography, props: {paragraph: true}},
    a: {component: Link},
    li: {
      component: withStyles(styles)(({...props}) => (
        <li>
          <Typography component="span" {...props} />
        </li>
      )),
    },
  },
}

interface Props {
  className: string
  key: string
  children?: React.ReactNode
}

export default function Markdown(props: Props) {
  return <ReactMarkdown options={options} {...props} />
}
