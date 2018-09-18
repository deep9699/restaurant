import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCusineComponent } from './manage-cusine.component';

describe('ManageCusineComponent', () => {
  let component: ManageCusineComponent;
  let fixture: ComponentFixture<ManageCusineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCusineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCusineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
