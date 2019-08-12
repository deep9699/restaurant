import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraaComponent } from './extraa.component';

describe('ExtraaComponent', () => {
  let component: ExtraaComponent;
  let fixture: ComponentFixture<ExtraaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
