import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angulartics2Module } from 'angulartics2';
import { NgxCarouselModule } from 'ngx-light-carousel';
import { BobModiComponent } from './animations/bob-modi/bob-modi.component';
import { CoinsComponent } from './animations/coins/coins.component';
import { PiggyBankComponent } from './animations/piggy-bank/piggy-bank.component';
import { PippaChecklistComponent } from './animations/pippa-checklist/pippa-checklist.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
	AboutComponent,
	BlogSliderComponent,
	CallToActionComponent,
	ComponentArticleExcerpt,
	ComponentContentPageTitle,
	FooterComponent,
	FrontpageComponent,
	GetStartedComponent,
	HeroTextWithImageComponent,
	HeroUspsComponent,
	LayoutComponent,
	PricingComponent,
	StagesComponent,
	TeamComponent,
	UsComponent,
	WhatComponent,
	WhoComponent,
	StartSavingComponent,
} from './components';
import * as Home from './components/home';
import * as Pricing from './components/pricing';
import { RedirectComponent } from './components/redirect/redirect.component';
import { DirectiveAppear } from './directives/appear.directive';
import { PageArticle, PageBlog, PageHome, PageIndustry, PagePricing } from './pages';
import { PrismService, SanityService } from './services';
import { PickYourPlanComponent } from './components/home/pick-your-plan/pick-your-plan.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
	declarations: [
		AppComponent,
		LayoutComponent,
		FrontpageComponent,
		StagesComponent,
		AboutComponent,
		HeroTextWithImageComponent,
		HeroUspsComponent,
		TeamComponent,
		PricingComponent,
		WhoComponent,
		WhatComponent,
		GetStartedComponent,
		UsComponent,
		CallToActionComponent,
		DirectiveAppear,
		PageIndustry,
		PageBlog,
		ComponentArticleExcerpt,
		ComponentContentPageTitle,
		PageArticle,
		PageHome,
		PagePricing,
		Home.StepsComponent,
		Home.ProductFeatureComponent,
		Home.HeroBannerComponent,
		Home.ProductFeatureCarouselComponent,
		Home.ProductFeatureListComponent,
		Home.ProductFeatureListColumnComponent,
		Home.ListBlogsComponent,
		Home.TestimonialCarouselComponent,
		Home.TestimonialComponent,
		Home.HomeCallToActionComponent,
		FooterComponent,
		Pricing.HeroBannerPricingComponent,
		Pricing.FaqsComponent,
		Pricing.ClientsComponent,
		Pricing.UspsComponent,
		BlogSliderComponent,
		PippaChecklistComponent,
		BobModiComponent,
		PiggyBankComponent,
		CoinsComponent,
		RedirectComponent,
		StartSavingComponent,
		PickYourPlanComponent,
		WelcomeComponent,
	],
	imports: [BrowserModule, NgxCarouselModule, Angulartics2Module.forRoot(), AppRoutingModule, FormsModule, BrowserModule, HttpClientModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, NgxCarouselModule],
	providers: [SanityService, PrismService],
	bootstrap: [AppComponent],
})
export class AppModule {}
