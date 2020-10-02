import { Component, OnInit, Input } from '@angular/core'
import { TestimonialDto } from 'src/app/classes'
import { SanityService } from 'src/app/services'

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent implements OnInit {
  @Input() testimonial: TestimonialDto
  content
  constructor(private sanityService: SanityService) {}

  async ngOnInit() {
    this.content = await this.sanityService.processRichText(this.testimonial.blockContent)
  }
}
