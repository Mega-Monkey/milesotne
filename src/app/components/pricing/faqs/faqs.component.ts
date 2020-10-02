import { Component, OnInit, Input } from '@angular/core'
import { SanityService } from 'src/app/services'

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
})
export class FaqsComponent implements OnInit {
  @Input() block
  content
  constructor(private sanityService: SanityService) {}

  async ngOnInit() {
    this.content = await this.sanityService.getFaqs(this.block._ref)
  }
}
