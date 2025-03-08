export interface NewsResponse {
  status: string
  totalResults: number
  results: Result[]
  nextPage: string
}

interface Result {
  article_id: string
  title: string
  link: string
  keywords?: string[]
  creator: string[] | null
  video_url: string | null
  description: string | null
  content: string
  pubDate: string
  pubDateTZ: string
  image_url: string | null
  source_id: string
  source_priority: number
  source_name: string
  source_url: string
  source_icon: string
  language: string
  country: string[]
  category: string[]
  ai_tag: string
  sentiment: string
  sentiment_stats: string
  ai_region: string
  ai_org: string
  duplicate: boolean
}