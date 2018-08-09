import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignFormDemoComponent } from './sign-form-demo.component';

describe('SignFormDemoComponent', () => {
  let component: SignFormDemoComponent;
  let fixture: ComponentFixture<SignFormDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignFormDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignFormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
