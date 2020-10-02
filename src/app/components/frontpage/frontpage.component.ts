import { Component, OnInit } from '@angular/core';
import { SanityService } from 'src/app/services';

@Component({
	selector: 'app-frontpage',
	templateUrl: './frontpage.component.html',
	styleUrls: ['./frontpage.component.scss'],
})
export class FrontpageComponent implements OnInit {
	slides: any[];
	homepage;
	constructor(private sanityService: SanityService) {}

	async ngOnInit() {
		this.homepage = await this.sanityService.getPageBySlug('homepage', 'home');
		console.log(this.homepage);
	}
	do() {
		setTimeout(() => {}, 5000);
		console.log(this.homepage);
	}
}
