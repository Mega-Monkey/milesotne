import { Component, OnInit, Input } from '@angular/core'
import { HomePageBlockDto, BlogListDto } from 'src/app/classes'
import { SanityService } from 'src/app/services'
import { ngxLightOptions } from 'ngx-light-carousel/public-api'

@Component({
  selector: 'app-list-blogs',
  templateUrl: './list-blogs.component.html',
  styleUrls: ['./list-blogs.component.scss'],
})
export class ListBlogsComponent implements OnInit {
  @Input() block: HomePageBlockDto
  // content
  content: BlogListDto
  options: ngxLightOptions
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
          width: 576,
          number: 2,
        },
        {
          width: 991,
          number: 3,
        },
        {
          width: 9999,
          number: 5,
        },
      ],
      scroll: {
        numberToScroll: 1,
      },
    }
  }

  async ngOnInit() {
    this.content = await this.sanityService.getBlogList(this.block._ref)
  }
}
