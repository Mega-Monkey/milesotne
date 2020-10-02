import { PageHome } from '../pages'

/*tslint:disable*/
export class HomePageBlockDto {
  // use _ref to get a document by id
  _key: string
  _ref: string
  _type: string
}
/*tslint:enable*/

export class SanityHeroBannerDto {
  constructor() {
    this.titleLineOne = ''
    this.titleLineTwo = ''
    this.subtitle = ''
    this.buttonText = ''
    this.smallText = ''
  }
  titleLineOne: string
  titleLineTwo: string
  subtitle: string
  buttonText: string
  smallText: string
}

export class HeroTextWithImageCarouselDto {
  constructor() {}
  title: string
  slides: HeroTextWithImageDto[]
}

export class HeroTextWithImageDto {
  constructor() {
    this.title = ''
    this.content = []
    this.image = ''
    this.localAsset = ''
    this.backgroundColor = ''
  }
  title: string
  content: any[]
  image: string
  localAsset: string
  backgroundColor: string
}

export class SanityStepsDto {
  constructor() {
    this.title = ''
    this.subtitle = ''
    this.steps = []
  }
  title: string
  subtitle: string
  steps: SanityStepDto[]
}

export class SanityStepDto {
  constructor() {
    this.text = ''
    this.icon = {
      _type: '',
      asset: {
        _ref: '',
        _type: '',
      },
    }
  }
  text: string
  icon: {
    _type: string
    asset: {
      _ref: string
      _type: string
    }
  }
}

export class ProductFeatureCarouselDto {
  constructor() {
    this.title = ''
    this.slides = []
  }
  title: string
  slides: ProductFeatureDto[]
}

export class ProductFeatureDto {
  constructor() {
    this.title = ''
    this.subtitle = []
    this.link = ''
    this.linkTitle = ''
    this.alignTextRight = false
    this.isStandalone = false
    this.linkIsButton = false
    this.image = {}
    this.localAsset = ''
  }
  title: string
  subtitle: any[]
  link: string
  linkTitle: string
  alignTextRight: boolean
  isStandalone: boolean
  linkIsButton: boolean
  localAsset: string
  image: object
}

export class ProductFeatureListDto {
  constructor() {
    this.title = ''
    this.columns = []
  }
  title: string
  columns: ProductFeatureListColumDto[]
}

export class ProductFeatureListColumDto {
  constructor() {
    this.title = ''
    this.lists = []
  }
  title: string
  lists: ProductFeatureListGroupDto[]
}

export class ProductFeatureListGroupDto {
  constructor() {
    this.title = ''
    this.contents = []
  }
  title: string
  contents: string[]
}

export class BlogListDto {
  constructor() {
    this.title = ''
    this.articles = []
  }
  title: string
  articles: HomepageArticleDto[]
}

export class HomepageArticleDto {
  constructor() {
    this.mainImage = ''
    this.mobileImage = ''
    this.slug = ''
    this.title = ''
    this.categories = []
  }
  mainImage: string
  mobileImage: string
  slug: string
  title: string
  categories: string[]
}

export class TestimonialsDto {
  constructor() {
    this.title = ''
    this.testimonials = []
  }
  title: string
  testimonials: TestimonialDto[]
}

export class TestimonialDto {
  constructor() {
    this.name = ''
    this.position = ''
    this.title = ''
    this.blockContent = []
    this.portrait = {}
  }
  name: string
  position: string
  title: string
  portrait: object
  blockContent: any[]
}

export class SanityCallToActionDto {
  constructor() {
    this.title = ''
    this.subtitle = ''
    this.buttonLeftDestination = ''
    this.buttonLeftText = ''
    this.buttonRightDestination = ''
    this.buttonRightText = ''
  }
  title: string
  subtitle: string
  buttonLeftDestination: string
  buttonLeftText: string
  buttonRightDestination: string
  buttonRightText: string
}
