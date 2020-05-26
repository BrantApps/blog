import {Box, Container, Grid} from "@material-ui/core"
import FormatQuoteIcon from "@material-ui/icons/FormatQuote"
import React from "react"
import theme from "../../theme"

interface Props {
  children: any
}

export default function Blockquote(props: Props) {
  return (
    <Container
      fixed
      style={{
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
      }}
    >
      {React.Children.map(props.children, (child) => {
        return (
          <Grid container wrap="nowrap" spacing={2} alignItems="flex-start">
            <Grid item>
              <Box display="grid">
                <FormatQuoteIcon
                  style={{
                    transform: "rotate(180deg)",
                    display: "inline",
                    marginTop: (theme.spacing() / 2) * -1,
                  }}
                />
                <FormatQuoteIcon
                  style={{
                    display: "inline",
                  }}
                />
              </Box>
            </Grid>
            <Grid item>
              <em>
                {React.cloneElement(child, {
                  variant: "subtitle1",
                })}
              </em>
            </Grid>
          </Grid>
        )
      })}
    </Container>
  )
}
