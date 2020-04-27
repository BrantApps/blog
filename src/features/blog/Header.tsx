import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import {Section} from "./types"
import {Tabs, Tab, Paper} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}))

interface Props {
  sections: Array<Section>
  title: string
}
export default function Header(props: Props) {
  const classes = useStyles()
  const {sections, title} = props

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
      </Toolbar>
      <Paper>
        <Tabs
          value={"Posts"}
          onChange={() => {}}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {sections.map((section) => (
            <Tab
              autoCapitalize={"off"}
              label={section.title}
              href={section.url}
            />
          ))}
        </Tabs>
      </Paper>
    </React.Fragment>
  )
}
