import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPart3Component } from './form-part3.component';

describe('FormPart3Component', () => {
  let component: FormPart3Component;
  let fixture: ComponentFixture<FormPart3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPart3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
