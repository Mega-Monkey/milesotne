import { Component, OnInit, Input } from '@angular/core'
import { HomePageBlockDto, TestimonialsDto } from 'src/app/classes'
import { SanityService } from 'src/app/services'
import { ngxLightOptions } from 'ngx-light-carousel'

@Component({
  selector: 'app-testimonial-carousel',
  templateUrl: './testimonial-carousel.component.html',
  styleUrls: ['./testimonial-carousel.component.scss'],
})
export class TestimonialCarouselComponent implements OnInit {
  @Input() block: HomePageBlockDto
  options: ngxLightOptions
  content: TestimonialsDto
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
    this.content = await this.sanityService.getTestimonials(this.block._ref)
  }
}
