import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCusineComponent } from './add-cusine.component';

describe('AddCusineComponent', () => {
  let component: AddCusineComponent;
  let fixture: ComponentFixture<AddCusineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCusineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCusineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
