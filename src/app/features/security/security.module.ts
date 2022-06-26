import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PamIconsRegistryService } from '@core/services/icons-registry.service';
import { IconComponent } from '@share/components/icon/icon.component';
import { pamIconCheckMark, pamIconCheckMarkCircle, pamIconEye, pamIconEyeOff, pamIconFacebook, pamIconGithub, pamIconGoogle } from '@share/models/pam-icons';
import { PamInputModule } from '@ui-lib/input/input.module';
import { SignInComponent } from './components/sign-in/sign-in.component';

import { PasswordFieldComponent } from './components/password-input/password-field.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SecurityRoutingModule } from './security-routing.module';


@NgModule({
  declarations: [
    IconComponent,
    SignInComponent,
    SignUpComponent,
    PasswordFieldComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SecurityRoutingModule,
    PamInputModule
  ]
})
export class SecurityModule {
  constructor(private pamIconRegistryService: PamIconsRegistryService) {
    this.pamIconRegistryService.registerIcons([
      pamIconFacebook,
      pamIconGoogle,
      pamIconGithub,
      pamIconCheckMark,
      pamIconCheckMarkCircle,
      pamIconEye,
      pamIconEyeOff
    ])
  }
}
