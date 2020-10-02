/*tslint:disable*/
export class IndustryDto {
	_createdAt?: string
	_id?: string
	_rev?: string
	_type?: string
	_updatedAt?: string
	userType: string
	tagLine: any[] // portable text block
	aboutBlock: {
		subtitle: string
		title: any[] // portable text block
		sections: AboutSectionDto[]
	}
	howBlock: {
		subtitle: string
		title: any[] // portable text block
		contents: any[] // portable text block
	}
	breakdownBlock: {
		subtitle: string
		title: any[] // portable text block
		contents: string
		sections: BreakdownSectionDto[]
	}
}

export class AboutSectionDto {
	title: string
	contents: string
	link: string
	linkTitle: string
	_key?: string
	_type?: string
}

export class BreakdownSectionDto {
	title: string
	description: string
	_key?: string
	_type?: string
}
/*tslint:enable*/
