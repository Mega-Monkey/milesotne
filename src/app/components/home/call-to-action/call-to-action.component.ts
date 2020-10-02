import { Component, OnInit, Input } from '@angular/core'
import { SanityService } from 'src/app/services'
import { SanityCallToActionDto, HomePageBlockDto } from 'src/app/classes'

@Component({
  selector: 'app-home-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss'],
})
export class HomeCallToActionComponent implements OnInit {
  @Input() block: HomePageBlockDto
  content: SanityCallToActionDto
  constructor(private sanityService: SanityService) {}

  async ngOnInit() {
    this.content = await this.sanityService.getDocumentById(this.block._ref, this.block._type, new SanityCallToActionDto())
  }
}
