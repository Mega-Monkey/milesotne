import { Component, HostListener } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  visible: boolean
  _this: boolean
  invert: boolean
  menuOpen = false
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      this.invert = data.invert
    })
  }

  ngOnInit(): void {}

  onAppear(event) {
    this.visible = event
  }

  showMenu() {
    this.menuOpen = true
  }

  hideMenu() {
    this.menuOpen = false
  }

  clickInside($event) {
    $event.stopPropagation()
    $event.preventDefault()
  }

  @HostListener('document:click', ['$event'])
  clickOutside() {
    this._this = false
  }

  @HostListener('window:resize', ['$event'])
  handleResize() {
    this.hideMenu()
  }
}
