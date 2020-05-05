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
  responsibilites?: string
}
