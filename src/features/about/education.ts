export interface Education {
  from: Date
  to: Date
  institution: {
    name: string
    url: string
  }
  diploma: string
  grade: string
}

export const education: Array<Education> = [
  {
    from: new Date("2003-09-01"),
    to: new Date("2008-06-01"),
    institution: {
      name: "Imperial College London",
      url: "https://www.imperial.ac.uk/about/",
    },
    diploma: "MEng Mechanical Engineering",
    grade: "2:1",
  },
  {
    from: new Date("2001-09-01"),
    to: new Date("2003-06-01"),
    institution: {
      name: "United World College of the Atlantic",
      url: "https://www.atlanticcollege.org/",
    },
    diploma: "International Baccalaureate Diploma",
    grade: "33/42 — Higher subjects: Maths, Physics & Chemistry",
  },
]
