import { Component } from '@angular/core'
import { Angulartics2GoogleGlobalSiteTag } from 'angulartics2/gst'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(angulartics: Angulartics2GoogleGlobalSiteTag) {
    angulartics.startTracking()
  }
}
