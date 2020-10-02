import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-blog-slider',
  templateUrl: './blog-slider.component.html',
  styleUrls: ['./blog-slider.component.scss'],
})
export class BlogSliderComponent implements OnInit {
  currentIndex: number = 0
  options1 = {
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
    arrows: true,
    infinite: false,
    autoplay: {
      enabled: true,
      direction: 'right',
      delay: 11000,
      stopOnHover: true,
      speed: 6000,
    },
    breakpoints: [
      {
        width: 768,
        number: 3,
      },
      {
        width: 9999,
        number: 5,
      },
    ],
  }

  slides = [
    {
      title: 'Live Project Status',
      content: 'See project status live from the dashboard, clients have a looking glass into their current contracts any time any where!',
      image: 'assets/status.jpg',
      bg: 'orange',
    },
    {
      title: 'Activity Stream',
      content:
        'Every change and update is now visible in the activity stream, check in with updates to deliverables and milestones and see the latest comments!',
      bg: 'purple',
    },
    {
      title: 'Notification Centre',
      content: `Coming Soon!`,
      bg: 'yellow',
    },
  ]
  constructor() {}

  ngOnInit(): void {}
}
