import { Component, OnInit, Input } from '@angular/core'
import { SanityService } from 'src/app/services'

@Component({
  selector: 'app-usps',
  templateUrl: './usps.component.html',
  styleUrls: ['./usps.component.scss'],
})
export class UspsComponent implements OnInit {
  @Input() block
  content
  constructor(private sanityService: SanityService) {}

  async ngOnInit() {
    this.content = await this.sanityService.getUsps(this.block._ref)
  }
}
