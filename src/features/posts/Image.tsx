import React from "react"
import {Grid} from "@material-ui/core"
import {CardMedia} from "@material-ui/core"
import theme from "../../theme"

export interface Props {
  src: string
  alt: string
}

export default function Image(props: Props) {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{padding: theme.spacing(2)}}
    >
      <Grid item xs={12} md={8}>
        <CardMedia component="img" image={props.src} alt={props.alt} />
      </Grid>
    </Grid>
  )
}
