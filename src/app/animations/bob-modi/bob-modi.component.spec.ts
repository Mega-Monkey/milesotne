import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BobModiComponent } from './bob-modi.component';

describe('BobModiComponent', () => {
  let component: BobModiComponent;
  let fixture: ComponentFixture<BobModiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BobModiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BobModiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
