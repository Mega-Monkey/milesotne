import { Component, OnInit } from '@angular/core'
import { SanityService } from '../../services'

@Component({
  selector: 'app-page-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PagePricing implements OnInit {
  pagePricing: any
  constructor(private sanityService: SanityService) {}

  async ngOnInit() {
    this.pagePricing = await this.sanityService.getPageBySlug('pagePricing', 'pricing')
    console.log('this.pagePricing', this.pagePricing)
  }
}
