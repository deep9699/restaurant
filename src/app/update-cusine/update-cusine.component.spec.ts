import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCusineComponent } from './update-cusine.component';

describe('UpdateCusineComponent', () => {
  let component: UpdateCusineComponent;
  let fixture: ComponentFixture<UpdateCusineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCusineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCusineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
