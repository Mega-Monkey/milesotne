import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-start-saving',
	templateUrl: './start-saving.component.html',
	styleUrls: ['./start-saving.component.scss'],
})
export class StartSavingComponent implements OnInit {
	block: boolean = true;
	startSaving: boolean = true;

	constructor() {}

	ngOnInit(): void {}
}
