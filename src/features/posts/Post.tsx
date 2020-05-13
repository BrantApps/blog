import React, {useEffect, useState} from "react"
import raw from "raw.macro"
import {makeStyles} from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Markdown from "markdown-to-jsx"
import {useParams} from "react-router-dom"
import {Box, CircularProgress} from "@material-ui/core"
import theme from "../../theme"

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}))

const draftPost = raw("./markdown/draft.md")

export default function Post() {
  const {id} = useParams()
  const classes = useStyles()
  const [post, setPost] = useState<string>()

  useEffect(() => {
    async function fetchMarkdown() {
      const postResponse = await fetch(
        `https://raw.githubusercontent.com/BrantApps/blog/master/src/features/posts/markdown/${id}.md`,
      )
      if (postResponse) {
        if (postResponse.status === 200) {
          const text = await postResponse.text()
          setPost(text)
        } else {
          setPost(draftPost)
        }
      }
    }

    fetchMarkdown()
  }, [id])

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <main>
          {post ? (
            <Grid container className={classes.mainGrid}>
              <Markdown key={post.substring(0, 40)}>{post}</Markdown>
            </Grid>
          ) : (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              minHeight={theme.spacing(10)}
              m={8}
            >
              <CircularProgress />
            </Box>
          )}
          <Box m={8} />
        </main>
      </Container>
    </React.Fragment>
  )
}
