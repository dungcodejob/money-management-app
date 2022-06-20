import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PamLabelDirective } from '@share/directives/label.directive';
import { PamFormFieldComponent } from './components/form-field/form-field.component';
import { PamInputDirective } from './directives/input.directive';



@NgModule({
  declarations: [
    PamFormFieldComponent,
    PamLabelDirective,
    PamInputDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PamFormFieldComponent,
    PamLabelDirective,
    PamInputDirective,
  ]
})
export class PamInputModule { }
