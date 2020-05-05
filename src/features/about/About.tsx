import React from "react"
import {
  Grid,
  Typography,
  Divider,
  Box,
  SvgIcon,
  Link,
  Paper,
  makeStyles,
  createStyles,
  Theme,
  Container,
} from "@material-ui/core"
import {jobs} from "./jobs"
import dayjs from "dayjs"
import Work from "@material-ui/icons/Work"
import Contact from "./Contact"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: "start",
      color: theme.palette.text.secondary,
      marginBottom: 16,
    },
  }),
)

export default function About() {
  const classes = useStyles()
  return (
    <Container maxWidth="lg">
      <Contact />
      <Grid container justify="center">
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            Experience
          </Typography>
          {jobs.map((job, index) => (
            <Paper className={classes.paper}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Box display="flex">
                    <SvgIcon
                      component={Work}
                      style={{
                        paddingRight: "16",
                        minHeight: "48",
                        minWidth: "48",
                        paddingBottom: "16",
                      }}
                    />
                    <Box>
                      <Typography variant="h6">{job.title}</Typography>
                      <Link
                        display="block"
                        variant="body1"
                        href={job.company.url}
                        key={job.company.url}
                      >
                        {job.company.name}
                      </Link>
                      <Typography variant="body1">
                        {`${dayjs(job.from).format("MMMM YYYY")} — 
            ${
              dayjs(job.to).isSame(new Date(), "day")
                ? "Present"
                : dayjs(job.to).format("MMMM YYYY")
            }`}
                      </Typography>
                      <Typography variant="body1">
                        {job.location.description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                {job.responsibilites ? (
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1">
                      {job.responsibilites}
                    </Typography>
                  </Grid>
                ) : null}
                {index < jobs.length - 1 ? (
                  <Divider style={{marginTop: 16, marginBottom: 16}} />
                ) : null}
              </Grid>
            </Paper>
          ))}
          <Box m={2} />
          <Typography variant="h4" gutterBottom>
            Education
          </Typography>
          <Typography variant="h4" gutterBottom>
            Volunteer Experience
          </Typography>
          <Divider />
        </Grid>
      </Grid>
    </Container>
  )
}
