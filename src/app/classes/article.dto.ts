export class ArticleDto {
  id?: string
  title: string
  handle: {
    _current: string
    _type: 'slug'
  }
  author: {
    _ref: string
    type: 'reference'
  }
  publishedDate: string
  mainImage: {
    type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  mobileImage?: {
    type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  excerpt?: string
  body: any[]
  categories: any[]
  mainImageUrl?: string
  mobileImageUrl?: string
}
