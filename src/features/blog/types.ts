export type PostSummary = {
  image: string
  imageText: string
  title: string
  description: string
  date: string
}

export type SocialLink = {
  name: string
  icon: React.ReactType
  url: string
}

export type Section = {
  title: string
  path: string
}

export type Archive = {
  year: number
  url: string
}
