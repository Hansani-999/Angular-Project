import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPart2Component } from './form-part2.component';

describe('FormPart2Component', () => {
  let component: FormPart2Component;
  let fixture: ComponentFixture<FormPart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPart2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
