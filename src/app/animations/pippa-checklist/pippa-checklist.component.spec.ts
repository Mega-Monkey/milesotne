import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PippaChecklistComponent } from './pippa-checklist.component';

describe('PippaChecklistComponent', () => {
  let component: PippaChecklistComponent;
  let fixture: ComponentFixture<PippaChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PippaChecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PippaChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
