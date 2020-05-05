import {Job} from "./types"

export const jobs: Array<Job> = [
  {
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
    title: "Lead Engineer",
    responsibilites:
      "Full Stack engineer helping to grow the engineering department",
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
    responsibilites: "Technology Manager to the 20 strong Android & iOS teams",
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
    responsibilites:
      "Tech lead for the Android & Web teams delivering B2B and B2C apps using Native & Hybrid app approaches",
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
    responsibilites: "Lead Android Engineer to the MATERIAL application",
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
    responsibilites:
      "Modernising financial systems across the world with our flagship Java web application, Alfa",
  },
]
