import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import staticConfig from "../../config"

function Copyright() {
  return (
    <Typography variant="body1" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href={staticConfig.website}>
        brant.apps
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0),
  },
}))

interface Props {
  description: string
  title: string
}

export default function Footer(props: Props) {
  const classes = useStyles()
  const {description, title} = props

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </footer>
  )
}
