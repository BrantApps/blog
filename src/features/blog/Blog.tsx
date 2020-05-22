import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import MainFeaturedPost from "./MainFeaturedPost"
import FeaturedPost from "./FeaturedPost"
import Main from "./Main"
import Sidebar from "./Sidebar"
import staticConfig from "../../config"

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}))

export default function Blog() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={staticConfig.mainFeaturedPost} />
          <Grid container spacing={4}>
            {staticConfig.featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Latest Posts..." posts={[staticConfig.latestPost]} />
            <Sidebar />
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  )
}
