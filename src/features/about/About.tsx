import React from "react"
import {Grid, Typography, Divider, Container} from "@material-ui/core"
import {jobs, volunteerJobs} from "./jobs"
import Work from "@material-ui/icons/Work"
import School from "@material-ui/icons/School"
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import Contact from "./Contact"
import {education} from "./education"
import InfoCard from "./InfoCard"

export default function About() {
  return (
    <Container maxWidth="lg">
      <Contact />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Experience
          </Typography>
          {jobs.map((job, index) => (
            <InfoCard
              title={job.title}
              from={job.from}
              to={job.to}
              link={job.company}
              footer={job.location.description}
              description={job.responsibilities}
              icon={Work}
              key={index}
            />
          ))}
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Education
          </Typography>
          {education.map((education, index) => (
            <InfoCard
              title={education.diploma}
              from={education.from}
              to={education.to}
              link={education.institution}
              footer={education.grade}
              icon={School}
              key={index}
            />
          ))}
          <Typography variant="h4" gutterBottom>
            Volunteering
          </Typography>
          {volunteerJobs.map((job, index) => (
            <InfoCard
              title={job.title}
              from={job.from}
              to={job.to}
              link={job.company}
              footer={job.location.description}
              description={job.responsibilities}
              icon={LocalHospitalIcon}
              key={index}
            />
          ))}
        </Grid>
        <Divider />
      </Grid>
    </Container>
  )
}
