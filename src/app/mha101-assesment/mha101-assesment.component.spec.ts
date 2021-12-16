import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MHA101AssesmentComponent } from './mha101-assesment.component';

describe('MHA101AssesmentComponent', () => {
  let component: MHA101AssesmentComponent;
  let fixture: ComponentFixture<MHA101AssesmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MHA101AssesmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MHA101AssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
