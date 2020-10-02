import { Component, OnInit } from '@angular/core'
import { SanityService } from 'src/app/services'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private sanityService: SanityService) {}
  footer
  email
  async ngOnInit() {
    this.footer = await this.sanityService.getFooter('default')
  }

  onSubmit(event) {
    console.log(event)
    window.location.href = 'https://app.milestonepay.com/signup?email=' + this.email
  }
}
