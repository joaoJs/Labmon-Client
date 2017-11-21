import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabmonComponent } from './labmon.component';

describe('LabmonComponent', () => {
  let component: LabmonComponent;
  let fixture: ComponentFixture<LabmonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabmonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabmonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
