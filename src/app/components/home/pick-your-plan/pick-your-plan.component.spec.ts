import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickYourPlanComponent } from './pick-your-plan.component';

describe('PickYourPlanComponent', () => {
  let component: PickYourPlanComponent;
  let fixture: ComponentFixture<PickYourPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickYourPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickYourPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
