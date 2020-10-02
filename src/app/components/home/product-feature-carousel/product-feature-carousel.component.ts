import { Component, OnInit, Input } from '@angular/core'
import { HomePageBlockDto, ProductFeatureCarouselDto, ProductFeatureDto } from 'src/app/classes'
import { SanityService } from 'src/app/services'
import { ngxLightOptions } from 'ngx-light-carousel/public-api'

@Component({
  selector: 'app-product-feature-carousel',
  templateUrl: './product-feature-carousel.component.html',
  styleUrls: ['./product-feature-carousel.component.scss'],
})
export class ProductFeatureCarouselComponent implements OnInit {
  @Input() block: HomePageBlockDto
  content: ProductFeatureCarouselDto
  slideIndex: number
  options: ngxLightOptions
  slide: any[]
  constructor(private sanityService: SanityService) {
    this.options = {
      animation: {
        animationClass: 'transition',
        animationTime: 200,
      },
      swipe: {
        swipeable: true,
        swipeVelocity: 1,
      },
      drag: {
        draggable: true,
        dragMany: false,
      },
      infinite: true,
      autoplay: {
        enabled: false,
        direction: 'right',
        delay: 5000,
        stopOnHover: true,
      },
      breakpoints: [
        {
          width: 9999,
          number: 1,
        },
      ],
      scroll: {
        numberToScroll: 1,
      },
    }
  }

  async ngOnInit() {
    this.content = await this.sanityService.getDocumentById(this.block._ref, this.block._type, new ProductFeatureCarouselDto())
    const slidePromises = []
    for (const slide of this.content.slides) {
      slidePromises.push(this.sanityService.getDocumentById((slide as any)._ref, (slide as any)._type, new ProductFeatureDto(), ['image']))
    }
    this.content.slides = await Promise.all(slidePromises)
  }
}
