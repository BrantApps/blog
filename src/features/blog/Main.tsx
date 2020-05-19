import React from "react"
import Divider from "@material-ui/core/Divider"
import {Grid, Typography} from "@material-ui/core"
import Markdown from "../shared/Markdown"

interface Props {
  posts: Array<string>
  title: string
}

export default function Main(props: Props) {
  const {posts, title} = props

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
        <Markdown key={post.substring(0, 40)}>{post}</Markdown>
      ))}
    </Grid>
  )
}
