import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PamFormFieldComponent } from './form-field.component';

describe('PamFormFieldComponent', () => {
  let component: PamFormFieldComponent;
  let fixture: ComponentFixture<PamFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PamFormFieldComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PamFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
