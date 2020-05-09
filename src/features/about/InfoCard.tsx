import {
  Box,
  Grid,
  Link,
  Paper,
  SvgIcon,
  Typography,
  makeStyles,
  Theme,
  Divider,
} from "@material-ui/core"
import dayjs from "dayjs"
import React from "react"
import theme from "../../theme"

interface Props {
  title: string
  link: {
    name: string
    url: string
  }
  from: Date
  to: Date
  footer: React.ReactNode
  icon?: React.ReactType
  description?: string
}

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "start",
    color: theme.palette.text.secondary,
    marginBottom: 16,
  },
}))

export default function InfoCard(props: Props) {
  const classes = useStyles()
  const {title, link, from, to, footer, icon, description} = props

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={description ? 6 : 12} lg={description ? 6 : 12}>
          <Box display="flex">
            {icon ? (
              <SvgIcon
                component={icon}
                style={{
                  paddingRight: theme.spacing(2),
                  minHeight: theme.spacing(6),
                  minWidth: theme.spacing(6),
                  paddingBottom: theme.spacing(2),
                }}
              />
            ) : null}
            <Box>
              <Typography variant="h6">{title}</Typography>
              <Link
                display="block"
                variant="body1"
                href={link.url}
                key={link.url}
              >
                {link.name}
              </Link>
              <Typography variant="body1">
                {`${dayjs(from).format("MMM YYYY")} — 
                            ${
                              dayjs(to).isSame(new Date(), "day")
                                ? "Present"
                                : dayjs(to).format("MMM YYYY")
                            }`}
              </Typography>
            </Box>
          </Box>
        </Grid>
        {description ? (
          <Grid item xs={12} md={6} lg={6}>
            <Typography variant="body1">{description}</Typography>
          </Grid>
        ) : null}
      </Grid>
      <Box>
        <Box display="div" m={1} />
        <Divider />
        <Box display="div" m={1} />
        {footer}
      </Box>
    </Paper>
  )
}
