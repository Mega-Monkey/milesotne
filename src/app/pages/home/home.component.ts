import { Component, OnInit } from '@angular/core'
import { SanityService } from '../../services'

@Component({
  selector: 'app-page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class PageHome implements OnInit {
  homepage: any
  constructor(private sanityService: SanityService) {}

  async ngOnInit() {
    this.homepage = await this.sanityService.getPageBySlug('homepage', 'home')
  }
}
