import Link from "@material-ui/core/Link"
import { Theme, withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import ReactMarkdown from "markdown-to-jsx"
import React from "react"
import Blockquote from "../posts/Blockquote"
import Image from "../posts/Image"
import AppStoreBadge from "./badges/AppStoreBadge"

const styles = (theme: Theme) => ({
  markdown: {
    ...theme.typography.body1,
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
    AppStoreBadge: {
      component: AppStoreBadge
    },
    Image: {
      component: Image,
    },
    blockquote: {
      component: Blockquote,
      props: {textSize: "smaller"},
    },
  },
}

const accessibleOptions = {
  overrides: {
    ...options.overrides,
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h4",
      },
    },
    h2: {component: Typography, props: {gutterBottom: true, variant: "h5"}},
    h3: {
      component: Typography,
      props: {gutterBottom: true, variant: "body1"},
    },
    h4: {
      component: withStyles(styles)(({...props}) => (
        <em>
          <Typography
            {...{
              gutterBottom: true,
              variant: "body1",
              paragraph: true,
              ...props,
            }}
          />
        </em>
      )),
    },
    p: {
      component: Typography,
      props: {paragraph: true, variant: "body2"},
    },
    a: {component: Link, props: {underline: "always"}},
    li: {
      component: withStyles(styles)(({...props}) => (
        <li>
          <Typography component="span" variant="body2" {...props} />
        </li>
      )),
    },
    blockquote: {
      component: Blockquote,
      props: {textSize: "bigger"},
    },
  },
}

interface Props {
  key: string
  children?: React.ReactNode
  textSize: "smaller" | "bigger"
}

export default function Markdown(props: Props) {
  if (props.textSize === "bigger") {
    return <ReactMarkdown options={accessibleOptions} {...props} />
  }
  return <ReactMarkdown options={options} {...props} />
}
