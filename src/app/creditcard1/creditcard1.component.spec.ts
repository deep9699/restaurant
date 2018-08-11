import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Creditcard1Component } from './creditcard1.component';

describe('Creditcard1Component', () => {
  let component: Creditcard1Component;
  let fixture: ComponentFixture<Creditcard1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Creditcard1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Creditcard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
