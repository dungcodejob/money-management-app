import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { PamInputDirective } from '@ui-lib/input/directives/input.directive';

@Component({
  selector: 'pam-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  host: { 'class': 'pam-form-field' },
})
export class PamFormFieldComponent implements OnInit, AfterContentInit {



  required = false;
  disabled = false;

  @ContentChild(PamInputDirective) inputRef: PamInputDirective;

  constructor() { }


  ngAfterContentInit(): void {
    this.required = this.inputRef.required;
    this.disabled = this.inputRef.disabled;
  }



  ngOnInit(): void {
  }

}
