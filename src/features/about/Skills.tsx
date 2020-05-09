import React from "react"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import Chip from "@material-ui/core/Chip"
import {Box} from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "flex-start",
      flexWrap: "wrap",
      listStyle: "none",
      flexGrow: 1,
      padding: theme.spacing(0.5),
      margin: 0,
    },
    chip: {
      margin: theme.spacing(0.5),
    },
  }),
)

interface Props {
  list: Array<{label: string; primary: "yes" | "no"}>
}

export default function Skills(props: Props) {
  const classes = useStyles()
  const list = props.list

  return (
    <Box component="ul" className={classes.root}>
      {list.map((skill) => {
        return (
          <li key={skill.label}>
            <Chip
              label={skill.label}
              className={classes.chip}
              color={skill.primary === "yes" ? "primary" : undefined}
              variant={skill.primary === "no" ? "outlined" : undefined}
            />
          </li>
        )
      })}
    </Box>
  )
}
