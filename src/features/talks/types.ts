export interface Talk {
  date: Date
  title: string
  shortDescription: string
  location: {
    latitude: number
    longitude: number
    description: string
  }
  slidesUrl: string
  video?: {
    url: string
    useVimeoWidget?: boolean
  }
}
