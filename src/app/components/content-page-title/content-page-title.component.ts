import { Component, OnInit, Input } from '@angular/core'
import { ComponentTitleDto } from 'src/app/classes'

@Component({
	selector: 'app-content-page-title',
	templateUrl: './content-page-title.component.html',
	styleUrls: ['./content-page-title.component.scss'],
})
export class ComponentContentPageTitle implements OnInit {
	@Input() titleObject: ComponentTitleDto

	constructor() {}

	ngOnInit(): void {}
}
