import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import {Section} from "./types"
import {Tabs, Tab, Paper} from "@material-ui/core"
import {useLocalStorage} from "../hooks"

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
  const [selectedTab, setSelectedTab] = useLocalStorage<number>(
    "selectedTab",
    0,
  )
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
      <Paper style={{marginBottom: 16}} elevation={0}>
        <Tabs
          value={selectedTab}
          onChange={(_, value: number) => setSelectedTab(value)}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {sections.map((section, index) => (
            <Tab
              autoCapitalize={"off"}
              label={section.title}
              href={`${process.env.PUBLIC_URL}${section.path}`}
              key={section.title}
              value={index}
            />
          ))}
        </Tabs>
      </Paper>
    </React.Fragment>
  )
}
