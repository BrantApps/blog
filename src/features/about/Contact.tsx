import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles((theme) => ({
  introduction: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  introductionContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}))

export default function Contact() {
  const classes = useStyles()

  return (
    <Paper
      className={classes.introduction}
      style={{
        backgroundImage: `url(https://source.unsplash.com/weekly?tessellate)`,
      }}
    >
      <div className={classes.overlay} />
      <Grid container>
        <Grid item xs={12} md={8}>
          <div className={classes.introductionContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              David Branton
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Software Engineer
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
}
