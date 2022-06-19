import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ShellRoutingModule } from './shell-routing.module';


@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ShellRoutingModule
  ],
  exports: [
    ShellRoutingModule
  ]
})
export class ShellModule { }
