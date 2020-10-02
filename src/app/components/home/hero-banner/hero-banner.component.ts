import { Component, OnInit, Input } from '@angular/core';
import { HomePageBlockDto, SanityHeroBannerDto } from 'src/app/classes';
import { SanityService } from 'src/app/services';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-hero-banner',
	templateUrl: './hero-banner.component.html',
	styleUrls: ['./hero-banner.component.scss'],
})
export class HeroBannerComponent implements OnInit {
	@Input() block: HomePageBlockDto;
	content: SanityHeroBannerDto;
	contactForm: {
		email: string;
	};
	constructor(private sanityService: SanityService) {
		this.contactForm = {
			email: '',
		};
	}

	async ngOnInit() {
		this.content = await this.sanityService.getDocumentById(this.block._ref, this.block._type, new SanityHeroBannerDto());
	}

	submit(form: NgForm) {
		console.log(form.value);
	}
}
