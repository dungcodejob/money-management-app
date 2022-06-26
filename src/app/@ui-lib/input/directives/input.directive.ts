import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'input[pamInput], textarea[pamInput]',
})
export class PamInputDirective {

  required = false;
  disabled = false;
  constructor(private ref: ElementRef<HTMLInputElement>) {
    this.required = this.ref.nativeElement.required;
    this.disabled = this.ref.nativeElement.disabled;
  }

}
