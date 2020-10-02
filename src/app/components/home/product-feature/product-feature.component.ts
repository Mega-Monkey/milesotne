import { Component, Input, OnInit } from '@angular/core'
import { HomePageBlockDto, ProductFeatureDto } from 'src/app/classes'
import { SanityService } from 'src/app/services'

@Component({
  selector: 'app-product-feature',
  templateUrl: './product-feature.component.html',
  styleUrls: ['./product-feature.component.scss'],
})
export class ProductFeatureComponent implements OnInit {
  @Input() block: HomePageBlockDto
  @Input() preparedBlock?: ProductFeatureDto
  content: ProductFeatureDto
  constructor(private sanityService: SanityService) {}

  async ngOnInit() {
    if (this.preparedBlock) {
      this.content = this.preparedBlock
    } else {
      this.content = await this.sanityService.getDocumentById(this.block._ref, this.block._type, new ProductFeatureDto(), ['image'])
      this.content.subtitle = await this.sanityService.processRichText(this.content.subtitle)
    }
  }
}
