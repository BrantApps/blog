import {Technology, Skill} from "./types"

export interface Project {
  name: string
  description: string
  link: {
    name: string
    url: string
  }
  tech: Array<Skill | Technology>
  from: Date
  to: Date
}

export const projects: Array<Project> = [
  {
    name: "OceanLife",
    description:
      "Access swell, wind, weather and tide information anywhere in the world",
    link: {
      name: "Google Play Store Listing",
      url: "https://play.google.com/store/apps/details?id=com.oceanlife",
    },
    tech: [
      {
        type: "android",
        primary: "yes",
      },
      {
        name: "modular",
        primary: "no",
      },
      {
        name: "instant-app",
        primary: "no",
      },
    ],
    from: new Date("2009-06-01"),
    to: new Date(),
  },
  {
    name: "OceanLife API",
    description: "REST API for the OceanLife app",
    link: {
      name: "Documentation",
      url: "https://api-project-780963063236.appspot.com",
    },
    tech: [
      {
        type: "node",
        primary: "yes",
      },
      {
        type: "javascript",
        primary: "no",
      },
      {
        name: "apiary",
        primary: "no",
      },
    ],
    from: new Date("2014-07-31"),
    to: new Date(),
  },
  {
    name: "App Store Publisher",
    description:
      "Automates the publishing of Android apps to the Amazon App Store",
    link: {
      name: "Source Code",
      url: "https://github.com/BrantApps/gradle-amazon-app-store-publisher",
    },
    tech: [
      {
        type: "kotlin",
        primary: "yes",
      },
      {
        type: "gradle",
        primary: "no",
      },
      {
        type: "android",
        primary: "no",
      },
    ],
    from: new Date("2019-05-30"),
    to: new Date(),
  },
  {
    name: "Personal Website",
    description: "The source code for what you are viewing right now",
    link: {
      name: "Source Code",
      url: "https://github.com/BrantApps/blog",
    },
    tech: [
      {
        type: "react",
        primary: "yes",
      },
      {
        type: "typescript",
        primary: "no",
      },
    ],
    from: new Date("2020-04-24"),
    to: new Date(),
  },
  {
    name: "Slack Channel Reader",
    description:
      "Kotlin command-line app to assist organisations in visualising how they are using Slack.",
    link: {
      name: "Source Code",
      url: "https://github.com/BrantApps/slack-channel-reader",
    },
    tech: [
      {
        type: "kotlin",
        primary: "yes",
      },
      {
        type: "rxjava",
        primary: "no",
      },
    ],
    from: new Date("2019-07-01"),
    to: new Date("2019-11-01"),
  },
]
