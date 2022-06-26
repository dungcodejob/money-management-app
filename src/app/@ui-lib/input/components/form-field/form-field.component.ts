import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { PamInputDirective } from '../../directives/input.directive';

@Component({
  selector: 'pam-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  host: { 'class': 'pam-form-field' },
})
export class PamFormFieldComponent implements AfterContentInit {



  required = false;
  disabled = false;

  @ContentChild(PamInputDirective) inputRef: PamInputDirective;

  constructor() { }


  ngAfterContentInit(): void {
    this.required = this.inputRef.required;
    this.disabled = this.inputRef.disabled;
  }



}
