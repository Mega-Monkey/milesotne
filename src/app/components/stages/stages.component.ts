import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { slideInOutBottom } from 'src/animations/slide.animation'
import { HomePageBlockDto, SanityHeroBannerDto } from 'src/app/classes'
import { SanityService } from 'src/app/services'

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.scss'],
  animations: [slideInOutBottom],
})
export class StagesComponent implements OnInit {
  @Input() block: HomePageBlockDto
  email
  content: SanityHeroBannerDto
  constructor(private sanityService: SanityService, private router: Router) {}

  async ngOnInit() {
    this.content = await this.sanityService.getHeroBannerHomepage(this.block._ref, new SanityHeroBannerDto())
  }

  onSubmit() {
    if (this.email !== null) {
      this.router.navigate(['/signup'], {
        queryParams: {
          email: this.email,
        },
      })
    } else {
      this.router.navigate(['/signup'])
    }
  }
}
