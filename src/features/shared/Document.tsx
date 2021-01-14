import {
  Box,
  CircularProgress,
  FormControlLabel, Switch,
  Typography
} from "@material-ui/core"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import React, { useState } from "react"
import theme from "../../theme"
import Markdown from "./Markdown"

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

interface Props {
    document: string | undefined
}

export default function Document(props: Props) {
    const classes = useStyles()
    const [textSize, setTextSize] = useState<"bigger" | "smaller">("smaller")

    function handleTextAccessibilityChange(change: "bigger" | "smaller") {
        setTextSize(change)
      }

      return (<React.Fragment>
      <Container maxWidth="md">
        <main>
          {props.document ? (
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
              <Markdown key={props.document.substring(0, 40)} textSize={textSize}>
                {props.document}
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
    </React.Fragment>)
}