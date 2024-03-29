import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Link from "@material-ui/core/Link"
import {PostSummary} from "./types"
import {CardActionArea} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
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
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}))

interface Props {
  post: PostSummary
}

export default function MainFeaturedPost(props: Props) {
  const classes = useStyles()
  const {post} = props

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{backgroundImage: `url(${post.image})`}}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{display: "none"}} src={post.image} alt={post.imageText} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <CardActionArea
            component="a"
            href={`${process.env.PUBLIC_URL}${post.path}`}
          >
            <div className={classes.mainFeaturedPostContent}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                {post.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {post.description}
              </Typography>
              <Link
                variant="subtitle1"
                href={`${process.env.PUBLIC_URL}${post.path}`}
              >
                Continue reading…
              </Link>
            </div>
          </CardActionArea>
        </Grid>
      </Grid>
    </Paper>
  )
}
