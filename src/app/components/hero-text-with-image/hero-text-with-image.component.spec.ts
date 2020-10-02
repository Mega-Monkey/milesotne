import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTextWithImageComponent } from './hero-text-with-image.component';

describe('HeroTextWithImageComponent', () => {
  let component: HeroTextWithImageComponent;
  let fixture: ComponentFixture<HeroTextWithImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroTextWithImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTextWithImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
