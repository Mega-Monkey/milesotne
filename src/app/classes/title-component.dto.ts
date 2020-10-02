export class ComponentTitleDto {
	constructor(title, subtitle, mobileTitle?) {
		this.title = title
		this.subtitle = subtitle
		if (mobileTitle) {
			this.mobileTitle = mobileTitle
		}
	}
	title: string
	subtitle: string
	mobileTitle?: string
}
