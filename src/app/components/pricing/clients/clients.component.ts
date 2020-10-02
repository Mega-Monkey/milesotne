import { Component, OnInit, Input } from '@angular/core'
import { SanityService } from 'src/app/services'

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  @Input() block
  content
  constructor(private sanityService: SanityService) {}

  async ngOnInit() {
    this.content = await this.sanityService.getClients(this.block._ref)
  }

  openModal() {
    console.log('open the cool modal')
  }
}
