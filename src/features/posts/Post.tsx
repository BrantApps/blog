import React, {useEffect, useState} from "react"
import raw from "raw.macro"
import {makeStyles} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import {useParams} from "react-router-dom"
import {
  Box,
  CircularProgress,
  Switch,
  FormControlLabel,
  Typography,
} from "@material-ui/core"
import theme from "../../theme"
import Markdown from "../shared/Markdown"
import staticConfig from "../../config"

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  bottomBar: {
    height: 0,
    [theme.breakpoints.down("xs")]: {
      position: "fixed",
      bottom: 0,
      height: 48,
      right: 0,
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
  },
  switch: {
    position: "absolute",
    right: 0,
    [theme.breakpoints.down("xs")]: {
      position: "fixed",
      marginRight: theme.spacing(5),
      bottom: 0,
      right: 0,
      backgroundColor: theme.palette.background.paper,
    },
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(6),
    },
    [theme.breakpoints.up("md")]: {
      marginRight: theme.spacing(6),
    },
    [theme.breakpoints.up("lg")]: {
      marginRight: theme.spacing(16),
    },
  },
}))

const draftPost = raw("./markdown/draft.md")
const debugPost = raw("./markdown/getting-your-users-to-upgrade.md")

export default function Post() {
  const {id} = useParams()
  const classes = useStyles()
  const [post, setPost] = useState<string>()
  const [textSize, setTextSize] = useState<"bigger" | "smaller">("smaller")

  useEffect(() => {
    async function fetchMarkdown() {
      if (staticConfig.debug) {
        setPost(debugPost)
      } else {
        const postResponse = await fetch(
          `https://raw.githubusercontent.com/BrantApps/blog/master/src/features/posts/markdown/${id}.md`,
        )
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

  function handleTextAccessibilityChange(change: "bigger" | "smaller") {
    setTextSize(change)
  }

  return (
    <React.Fragment>
      <Container maxWidth="md">
        <main>
          {post ? (
            <React.Fragment>
              <Grid container className={classes.mainGrid}>
                <Box itemType="div" className={classes.bottomBar} />
                <FormControlLabel
                  control={
                    <>
                      <Typography variant="caption">A</Typography>
                      <Switch
                        name="largerText"
                        color="primary"
                        checked={textSize === "bigger"}
                        onChange={(change) =>
                          handleTextAccessibilityChange(
                            change.target.checked ? "bigger" : "smaller",
                          )
                        }
                      />
                    </>
                  }
                  label={"A"}
                  className={classes.switch}
                />
                <Markdown key={post.substring(0, 40)} textSize={textSize}>
                  {post}
                </Markdown>
              </Grid>
            </React.Fragment>
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
