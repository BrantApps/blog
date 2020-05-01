import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import {Section} from "./types"
import {Tabs, Tab, Paper, FormControlLabel, Switch} from "@material-ui/core"
import {useLocation} from "react-router-dom"

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
  appliedPaletteType: "dark" | "light"
  handleThemeSwitch: () => void
}
export default function Header(props: Props) {
  const classes = useStyles()
  const location = useLocation()
  const {sections, title} = props

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar} style={{alignItems: "center"}}>
        <div style={{flex: 1}} />
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
          style={{
            flex: 2,
          }}
        >
          {title}
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={props.appliedPaletteType === "dark"}
              onChange={props.handleThemeSwitch}
              name="darkmode"
              color="primary"
            />
          }
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
          label={"🌗"}
        />
      </Toolbar>
      <Paper style={{marginBottom: 16}} elevation={0}>
        <Tabs
          value={location.pathname}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {sections.map((section) => (
            <Tab
              autoCapitalize={"off"}
              label={section.title}
              href={`${process.env.PUBLIC_URL}${section.path}`}
              key={section.title}
              value={section.path}
            />
          ))}
        </Tabs>
      </Paper>
    </React.Fragment>
  )
}
