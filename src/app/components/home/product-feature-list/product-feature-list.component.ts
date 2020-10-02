import { Component, OnInit, Input } from '@angular/core'
import { HomePageBlockDto, ProductFeatureListDto } from 'src/app/classes'
import { SanityService } from 'src/app/services'

@Component({
  selector: 'app-product-feature-list',
  templateUrl: './product-feature-list.component.html',
  styleUrls: ['./product-feature-list.component.scss'],
})
export class ProductFeatureListComponent implements OnInit {
  @Input() block: HomePageBlockDto
  // content
  content: ProductFeatureListDto
  constructor(private sanityService: SanityService) {}

  async ngOnInit() {
    this.content = await this.sanityService.getProductFeatureList(this.block._ref)
  }
}
