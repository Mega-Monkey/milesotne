import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss'],
})
export class RedirectComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(data => {
      setTimeout(() => {
        if (data.email) {
          window.location.href = 'https://app.milestonepay.com/signup?email=' + data.email
        } else {
          window.location.href = 'https://app.milestonepay.com/signup'
        }
      }, 1000)
    })
  }

  ngOnInit(): void {}
}
