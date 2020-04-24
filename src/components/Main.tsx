import React from "react"
import Divider from "@material-ui/core/Divider"
import {makeStyles} from "@material-ui/core/styles"
import {Grid, Typography} from "@material-ui/core"
import Markdown from "./Markdown"

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}))

interface Props {
  posts: Array<string>
  title: string
}

export default function Main(props: Props) {
  const classes = useStyles()
  const {posts, title} = props
  posts.map((post) => console.log(post))

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
        <Markdown className={classes.markdown} key={post.substring(0, 40)}>
          {post}
        </Markdown>
      ))}
    </Grid>
  )
}
