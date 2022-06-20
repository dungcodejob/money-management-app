import { ChangeDetectionStrategy, Component, ContentChild, OnInit } from '@angular/core';
import { PamInputDirective } from '@ui-lib/input/directives/input.directive';

@Component({
  selector: 'pam-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  host: { 'class': 'pam-form-field' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PamFormFieldComponent implements OnInit {

  @ContentChild(PamInputDirective) input!: PamInputDirective;

  constructor() { }

  ngOnInit(): void {
  }

}
