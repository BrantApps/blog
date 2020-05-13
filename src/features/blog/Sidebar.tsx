import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import GitHubIcon from "@material-ui/icons/GitHub"
import TwitterIcon from "@material-ui/icons/Twitter"
import StackOverflowIcon from "@material-ui/icons/HorizontalSplit"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import {Archive, SocialLink} from "./types"
import staticConfig from "../../config"

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}))

const sidebar = {
  title: "What's this?",
  description: "👋 It's my personal blog discussing software, hiring & teams.",
  archives: [
    {year: 2020, url: "#"},
    {year: 2019, url: "#"},
    {year: 2018, url: "#"},
    {year: 2017, url: "#"},
    {year: 2016, url: "#"},
    {year: 2015, url: "#"},
  ],
  social: [
    {name: "GitHub", icon: GitHubIcon, url: staticConfig.githubUrl},
    {
      name: "Twitter",
      icon: TwitterIcon,
      url: staticConfig.twitterUrl,
    },
    {
      name: "Stack Overflow",
      icon: StackOverflowIcon,
      url: staticConfig.stackoverflowUrl,
    },
  ],
}

export default function Sidebar() {
  const classes = useStyles()

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          {sidebar.title}
        </Typography>
        <Typography>{sidebar.description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Social
      </Typography>
      {sidebar.social.map((network: SocialLink) => (
        <Link
          display="block"
          variant="body1"
          href={network.url}
          key={network.url}
        >
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Archives
      </Typography>
      {sidebar.archives.map((archive: Archive) => (
        <Link
          display="block"
          variant="body1"
          href={archive.url}
          key={archive.year}
        >
          {archive.year}
        </Link>
      ))}
    </Grid>
  )
}
