import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBannerPricingComponent } from './hero-banner-pricing.component';

describe('HeroBannerPricingComponent', () => {
  let component: HeroBannerPricingComponent;
  let fixture: ComponentFixture<HeroBannerPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroBannerPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBannerPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
