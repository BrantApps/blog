import React from "react"
import dayjs from "dayjs"
import Microlink from "@microlink/react"
import {CssBaseline, Container, makeStyles, Typography} from "@material-ui/core"
import VoiceIcon from "@material-ui/icons/RecordVoiceOver"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import {talks} from "./list"
import {Talk} from "./types"
import theme from "../../theme"

const useStyles = makeStyles(() => ({
  toolbarTitle: {
    flex: 1,
  },
  responsiveIframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: 0,
  },
  responsiveContainer: {
    position: "relative",
    overflow: "hidden",
    paddingTop: "56.25%", // (9/16)
  },
}))

export default function Talks() {
  const classes = useStyles()

  const sortedTalks = talks.sort((a: Talk, b: Talk) => {
    if (a.date > b.date) {
      return -1
    }

    if (a.date < b.date) {
      return 1
    }

    return 0
  })

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <VerticalTimeline animate={false} lineColor={theme.palette.divider}>
            {sortedTalks.map((talk, index) => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{color: "black"}}
                contentArrowStyle={{
                  borderRight: "7px solid black",
                }}
                date={dayjs(talk.date).format("MMMM, YYYY")}
                iconStyle={{
                  background: theme.palette.primary.dark,
                  color: "#fff",
                }}
                icon={<VoiceIcon />}
                key={talk.date.toISOString() + index}
              >
                <Typography
                  variant="h5"
                  className="vertical-timeline-element-title"
                >
                  {talk.title}
                </Typography>
                <Typography
                  variant="h6"
                  className="vertical-timeline-element-subtitle"
                >
                  {talk.location.description}
                </Typography>
                <p />
                {talk.video && talk.video.useVimeoWidget ? (
                  <div className={classes.responsiveContainer}>
                    <iframe
                      title="vimeo-player"
                      src={talk.video.url}
                      className={classes.responsiveIframe}
                    />
                  </div>
                ) : null}
                {talk.video && !talk.video.useVimeoWidget ? (
                  <Microlink
                    url={talk.video.url}
                    size="large"
                    style={{marginBottom: 16}}
                  />
                ) : null}
                <Microlink
                  url={talk.slidesUrl}
                  size={talk.video?.url ? null : "large"}
                />
                <p />
                <Typography variant="subtitle1">
                  {talk.shortDescription}
                </Typography>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </main>
      </Container>
    </React.Fragment>
  )
}
