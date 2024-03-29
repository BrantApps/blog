import {Technology, Skill} from "./types"

export interface Job {
  from: Date
  to: Date
  company: {
    name: string
    url: string
  }
  location: {
    latitude: number
    longitude: number
    description: string
  }
  title: string
  responsibilities?: string
  skills: Array<Skill | Technology>
}

const candide = {
  from: new Date("2018-06-01"),
  to: new Date(),
  company: {
    name: "Candide",
    url: "https://candidegardening.com",
  },
  location: {
    latitude: 51.4545,
    longitude: -2.5879,
    description: "Bristol, UK",
  },
}

export const jobs: Array<Job> = [
  {
    ...candide,
    title: "CTO",
    responsibilities: "Organisation Design, Product, Strategy",
    skills: [
      {
        name: "planning",
        primary: "yes",
      },
      {
        name: "hiring",
        primary: "yes",
      },
    ],
  },
  {
    ...candide,
    title: "Lead Engineer",
    responsibilities:
      "Full Stack engineer helping to grow the engineering department",
    skills: [
      {
        type: "react",
        primary: "yes",
      },
      {
        type: "node",
        primary: "yes",
      },
      {
        name: "hiring",
        primary: "yes",
      },
      {
        type: "react-native",
        primary: "no",
      },
      {
        type: "typescript",
        primary: "no",
      },
    ],
  },
  {
    from: new Date("2015-02-01"),
    to: new Date("2018-05-01"),
    company: {
      name: "Just Eat",
      url: "https://careers.just-eat.com/departments/technology",
    },
    location: {
      latitude: 51.4545,
      longitude: -2.5879,
      description: "Bristol, UK",
    },
    title: "Technology Manager",
    responsibilities: "Technology Manager to the 20 strong Android & iOS teams",
    skills: [
      {
        name: "personal development",
        primary: "yes",
      },
      {
        name: "delivery",
        primary: "yes",
      },
      {
        name: "hiring",
        primary: "yes",
      },
      {
        name: "architecture",
        primary: "no",
      },
    ],
  },
  {
    from: new Date("2014-02-01"),
    to: new Date("2015-02-01"),
    company: {
      name: "Mubaloo",
      url: "https://mubaloo.com",
    },
    location: {
      latitude: 51.4545,
      longitude: -2.5879,
      description: "Bristol, UK",
    },
    title: "Technical Lead",
    responsibilities:
      "Android & Web tech lead delivering B2B and B2C apps using native & hybrid approaches",
    skills: [
      {
        type: "android",
        primary: "yes",
      },
      {
        name: "mentoring",
        primary: "yes",
      },
      {
        name: "delivery",
        primary: "no",
      },
      {
        name: "dev advocate",
        primary: "no",
      },
    ],
  },
  {
    from: new Date("2013-06-01"),
    to: new Date("2014-02-01"),
    company: {
      name: "Inq Mobile (closed down)",
      url: "https://en.wikipedia.org/wiki/Inq_Mobile",
    },
    location: {
      latitude: 51.5074,
      longitude: 0.1278,
      description: "London, UK",
    },
    title: "Android Lead",
    responsibilities: "Lead Android Engineer to the MATERIAL application",
    skills: [
      {
        type: "android",
        primary: "yes",
      },
      {
        type: "java",
        primary: "no",
      },
    ],
  },
  {
    from: new Date("2008-10-01"),
    to: new Date("2013-06-01"),
    company: {
      name: "Alfa",
      url: "https://en.wikipedia.org/wiki/Inq_Mobile",
    },
    location: {
      latitude: 51.5074,
      longitude: 0.1278,
      description: "London, Stockholm, Sydney, Auckland",
    },
    title: "Senior Consultant",
    responsibilities:
      "Modernising financial systems across the world with our flagship Java web application, Alfa",
    skills: [
      {
        type: "java",
        primary: "yes",
      },
      {
        name: "migrations",
        primary: "yes",
      },
      {
        name: "consultancy",
        primary: "no",
      },
    ],
  },
]

export const volunteerJobs: Array<Job> = [
  {
    from: new Date("2003-01-01"),
    to: new Date("2006-01-01"),
    company: {
      name: "RNLI",
      url: "https://rnli.org",
    },
    location: {
      latitude: 51.401389,
      longitude: -3.5325,
      description: "Atlantic College Station, UK",
    },
    title: "Crew Member on B-763",
    skills: [
      {
        name: "navigation",
        primary: "yes",
      },
      {
        name: "first aid",
        primary: "yes",
      },
      {
        name: "helming",
        primary: "no",
      },
    ],
  },
]
