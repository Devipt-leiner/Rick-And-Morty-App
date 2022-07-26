import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonModule} from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    MenuModule,
    SidebarModule,
    ToolbarModule
  ],
  exports: [
    ButtonModule,
    ImageModule,
    MenuModule,
    SidebarModule,
    ToolbarModule
  ],
})
export class PrimeNgModule { }
