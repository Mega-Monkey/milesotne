import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroUspsComponent } from './hero-usps.component';

describe('HeroUspsComponent', () => {
  let component: HeroUspsComponent;
  let fixture: ComponentFixture<HeroUspsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroUspsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroUspsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
