import Link from "@material-ui/core/Link"
import {Theme, withStyles} from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import ReactMarkdown from "markdown-to-jsx"
import React from "react"
import Image from "../posts/Image"
import Blockquote from "../posts/Blockquote"

const styles = (theme: Theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
})

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
    a: {component: Link, props: {underline: "always"}},
    li: {
      component: withStyles(styles)(({...props}) => (
        <li>
          <Typography component="span" {...props} />
        </li>
      )),
    },
    Image: {
      component: Image,
    },
    blockquote: {
      component: Blockquote,
    },
  },
}

interface Props {
  key: string
  children?: React.ReactNode
}

export default function Markdown(props: Props) {
  return <ReactMarkdown options={options} {...props} />
}
