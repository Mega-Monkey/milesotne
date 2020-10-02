import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-product-feature-list-column',
  templateUrl: './product-feature-list-column.component.html',
  styleUrls: ['./product-feature-list-column.component.scss'],
})
export class ProductFeatureListColumnComponent implements OnInit {
  @Input() column
  @Input() oddColumn: boolean
  constructor() {}

  async ngOnInit() {}
}
