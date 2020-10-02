import { Component, OnInit, Input } from '@angular/core'
import { HomePageBlockDto, SanityStepsDto } from 'src/app/classes'
import { SanityService } from 'src/app/services'

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent implements OnInit {
  @Input() block: HomePageBlockDto
  content: SanityStepsDto
  constructor(private sanityService: SanityService) {}

  async ngOnInit() {
    // this.content = await this.sanityService.getSteps(this.block._ref)
  }
}
