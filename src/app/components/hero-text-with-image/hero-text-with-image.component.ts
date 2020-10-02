import { Component, Input, OnInit } from '@angular/core'
import { ngxLightOptions } from 'ngx-light-carousel'
import { slideInOutBottom, slideInOutLeft, slideInOutRight } from 'src/animations/slide.animation'
import { HomePageBlockDto } from 'src/app/classes'
import { SanityService } from 'src/app/services'

@Component({
  selector: 'app-hero-text-with-image',
  templateUrl: './hero-text-with-image.component.html',
  styleUrls: ['./hero-text-with-image.component.scss'],
  animations: [slideInOutLeft, slideInOutRight, slideInOutBottom],
})
export class HeroTextWithImageComponent implements OnInit {
  @Input() block: HomePageBlockDto
  content
  constructor(private sanityService: SanityService) {}
  visible: boolean
  currentIndex: number = 0
  options1: ngxLightOptions = {
    animation: {
      animationClass: 'transition',
      animationTime: 500,
    },
    swipe: {
      swipeable: true,
      swipeVelocity: 0.004,
    },
    drag: {
      draggable: true,
      dragMany: true,
    },
    arrows: false,
    indicators: true,
    infinite: false,
    autoplay: {
      enabled: true,
      direction: 'right',
      delay: 11000,
      stopOnHover: true,
    },
    scroll: {
      numberToScroll: 1,
    },
    breakpoints: [
      {
        width: 9999,
        number: 1,
      },
    ],
  }

  slides = [
    {
      title: 'Live Project Status',
      content: 'See project status live from the dashboard, clients have a looking glass into their current contracts any time any where!',
      image: 'assets/status.jpg',
      bg: 'grey',
    },
  ]
  onAppear(event) {
    this.visible = event
  }
  async ngOnInit() {
    this.content = await this.sanityService.getHeroTextWithImage(this.block._ref)
    for (const slide of this.content.slides) {
      slide.content = await this.sanityService.processRichText(slide.content)
    }
  }
}
