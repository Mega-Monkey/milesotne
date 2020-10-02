import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSavingComponent } from './start-saving.component';

describe('StartSavingComponent', () => {
  let component: StartSavingComponent;
  let fixture: ComponentFixture<StartSavingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartSavingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartSavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
