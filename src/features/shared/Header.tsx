import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import {Section} from "../blog/types"
import {Tabs, Tab, FormControlLabel, Switch, Box} from "@material-ui/core"
import {useLocation} from "react-router-dom"
import theme from "../../theme"

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
    },
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
      <Toolbar className={classes.toolbar}>
        <Box itemType="flex" flex="1">
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {title}
          </Typography>
        </Box>
        <Box itemType="div" position="absolute" right="0">
          <FormControlLabel
            control={
              <Switch
                checked={props.appliedPaletteType === "dark"}
                onChange={props.handleThemeSwitch}
                name="darkmode"
                color="primary"
              />
            }
            label={"🌗"}
          />
        </Box>
      </Toolbar>
      <Tabs
        value={sanitisePathname(location.pathname)}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        centered
        style={{
          paddingBottom: theme.spacing(2),
          paddingLeft: theme.spacing(3),
          paddingRight: theme.spacing(3),
        }}
      >
        {sections.map((section) => (
          <Tab
            label={section.title}
            href={`${process.env.PUBLIC_URL}${section.path}`}
            key={section.title}
            value={section.path}
          />
        ))}
      </Tabs>
    </React.Fragment>
  )
}

function sanitisePathname(path: string) {
  if (path.indexOf("posts") > 0) {
    return "/"
  }

  return path
}
