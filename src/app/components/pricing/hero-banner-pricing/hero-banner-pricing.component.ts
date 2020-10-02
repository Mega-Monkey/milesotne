import { Component, OnInit, Input } from '@angular/core'
import { SanityService } from 'src/app/services'

@Component({
  selector: 'app-hero-banner-pricing',
  templateUrl: './hero-banner-pricing.component.html',
  styleUrls: ['./hero-banner-pricing.component.scss'],
})
export class HeroBannerPricingComponent implements OnInit {
  @Input() block
  content
  constructor(private sanityService: SanityService) {}

  async ngOnInit() {
    this.content = await this.sanityService.getHeroBannerPricing(this.block._ref)
  }
}
