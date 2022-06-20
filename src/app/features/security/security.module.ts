import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PamIconsRegistryService } from '@core/services/icons-registry.service';
import { IconComponent } from '@share/components/icon/icon.component';
import { pamIconFacebook, pamIconGithub, pamIconGoogle } from '@share/models/pam-icons';
import { PamInputModule } from '@ui-lib/input/input.module';
import { SignInComponent } from './components/sign-in/sign-in.component';

import { SecurityRoutingModule } from './security-routing.module';


@NgModule({
  declarations: [
    IconComponent,
    SignInComponent,
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    PamInputModule
  ]
})
export class SecurityModule {
  constructor(private pamIconRegistryService: PamIconsRegistryService) {
    this.pamIconRegistryService.registerIcons([
      pamIconFacebook,
      pamIconGoogle,
      pamIconGithub
    ])
  }
}
