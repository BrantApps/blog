import {Talk} from "./types"

export const talks: Array<Talk> = [
  {
    title: "Modular Architecture",
    location: {
      latitude: 51.4545,
      longitude: -2.5879,
      description: "Bristol, UK",
    },
    date: new Date("2017-01-15"),
    slidesUrl:
      "https://docs.google.com/presentation/d/18ud0ywzSn93-p-FJsRGuR3TvtbtaRd6w-vjrfFZ6OCw",
    shortDescription:
      "An introduction to modularisation on Android followed by a live coding demo, modularising a portion of OceanLife",
  },
  {
    title: "Building Android with Docker",
    location: {
      latitude: 51.4545,
      longitude: -2.5879,
      description: "Bristol, UK",
    },
    date: new Date("2017-03-15"),
    slidesUrl:
      "https://docs.google.com/presentation/d/14KQEKGL58PKGYXrBGBObD8_P680rXyPxLANRL7eArWk",
    shortDescription:
      "A lightning talk on the first part of my journey to modernise the Just Eat build system",
  },
  {
    title: "Work Hard, Play Hard?",
    location: {
      latitude: 51.4545,
      longitude: -2.5879,
      description: "Bristol, UK",
    },
    date: new Date("2018-02-15"),
    slidesUrl:
      "https://docs.google.com/presentation/d/1UbUDdDs2-1Qo1jf2_1z5oNsgrss9B0p-Tafz8Unsx3g",
    video: {
      url: "https://www.youtube.com/watch?v=I1gxoOG8cF4",
    },
    shortDescription:
      "Supporting only Google's fork of Android does not mean your app can run on Android",
  },
  {
    title: "Firebase Performance",
    location: {
      latitude: 51.5074,
      longitude: 0.1278,
      description: "London, UK",
    },
    date: new Date("2018-03-15"),
    slidesUrl:
      "https://docs.google.com/presentation/d/1q1EyUJZJ5kqpImI79d6rb6diJEWHCr-q640XlzggIi8",
    shortDescription:
      "Lightning talk on Firebase Performance, how to get up and running and what you get",
  },
  {
    title: "TeamCity Kotlin DSL",
    location: {
      latitude: 51.5074,
      longitude: 0.1278,
      description: "London, UK",
    },
    date: new Date("2018-05-15"),
    slidesUrl:
      "https://docs.google.com/presentation/d/1Au2trswukU3kkRtUbGt6iWZdFq1eB-oVrCaLZsRvXsQ",
    shortDescription:
      "Using TeamCity's Kotlin DSL to create a productive build pipelines",
  },
  {
    title: "Wellbeing - Notes from Google I/O",
    location: {
      latitude: 51.4545,
      longitude: -2.5879,
      description: "Bristol, UK",
    },
    date: new Date("2018-06-15"),
    slidesUrl:
      "https://docs.google.com/presentation/d/1JrmMKz0mXpZAK2b0nqEOJLT6CeprrltTGTmLMuLpNuo",
    shortDescription:
      "Digital Wellbeing - My notes and insights into the psychology of the features announced at Google I/O 2018",
  },
  {
    title: "Chaos Mode: A foray into fuzz",
    location: {
      latitude: 51.4545,
      longitude: -2.5879,
      description: "Bristol, UK",
    },
    date: new Date("2018-11-15"),
    slidesUrl:
      "https://docs.google.com/presentation/d/1kWDQEjj_ewoAbhhEMWijZkdEbHgahofMK87SXsQAIh8",
    shortDescription:
      "Come on a journey of test case evolution with Android, Kotlin, Java and fuzzing! Learn how you can leverage the power of Kotlin's DSL properties to build readable & minimal test-case fixtures. Use frameworks such as Elmyr to improve test reliability and learn how to introduce fixtures into your apps to unleash the chaos!",
  },
  {
    title: "Instant Apps - Ytho?",
    location: {
      latitude: 51.4545,
      longitude: -2.5879,
      description: "Bristol, UK",
    },
    date: new Date("2019-03-15"),
    slidesUrl:
      "https://docs.google.com/presentation/d/1MZbmuCzlLBQLJ_epEouFRpRctLAUC-8fl__jGO05NLM",
    shortDescription: "App distribution is changing...",
  },
  {
    title: "Android... without Google",
    location: {
      latitude: 52.52,
      longitude: 13.405,
      description: "Berlin, Germany",
    },
    date: new Date("2019-07-15"),
    slidesUrl:
      "https://docs.google.com/presentation/d/1Rs8fPRC7yyDbfzWwLifsUo8nuFO8dfGMjwz6wE_uRFc",
    shortDescription:
      "With the Google-Huwaei dispute in full swing I talked to Droidcon Berlin attendees about how to build for Android, without Google",
    video: {
      url: "https://player.vimeo.com/video/352689003",
      useVimeoWidget: true,
    },
  },
]
