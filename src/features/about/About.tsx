import React from "react"
import {Grid, Typography, Container} from "@material-ui/core"
import {jobs, volunteerJobs} from "./jobs"
import Work from "@material-ui/icons/Work"
import School from "@material-ui/icons/School"
import Code from "@material-ui/icons/Code"
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import Contact from "./Contact"
import {education} from "./education"
import InfoCard from "./InfoCard"
import {projects} from "./project"
import Skills from "./Skills"
import {Technology, Skill} from "./types"

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
              footer={<Skills list={job.skills.map(toSkill)} />}
              description={job.responsibilities}
              icon={Work}
              key={index}
            />
          ))}
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Personal Projects
          </Typography>
          {projects.map((project, index) => (
            <InfoCard
              title={project.name}
              from={project.from}
              to={project.to}
              link={project.link}
              description={project.description}
              footer={<Skills list={project.tech.map(toSkill)} />}
              icon={Code}
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
              footer={
                <Typography variant="body1">{education.grade}</Typography>
              }
              icon={School}
              key={index}
            />
          ))}
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Volunteering
          </Typography>
          {volunteerJobs.map((job, index) => (
            <InfoCard
              title={job.title}
              from={job.from}
              to={job.to}
              link={job.company}
              footer={<Skills list={job.skills.map(toSkill)} />}
              description={job.responsibilities}
              icon={LocalHospitalIcon}
              key={index}
            />
          ))}
        </Grid>
      </Grid>
    </Container>
  )
}

function toSkill(skillOrTechnology: Skill | Technology) {
  return {
    label:
      "name" in skillOrTechnology
        ? skillOrTechnology.name
        : skillOrTechnology.type,
    primary: skillOrTechnology.primary,
  }
}
