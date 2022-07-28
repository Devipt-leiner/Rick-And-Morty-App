import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChipModule } from 'primeng/chip';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { TabMenuModule } from 'primeng/tabmenu';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    ChipModule,
    MenuModule,
    SidebarModule,
    TabMenuModule,
    ToolbarModule
  ],
  exports: [
    ButtonModule,
    CardModule,
    ChipModule,
    DialogModule,
    ImageModule,
    MenuModule,
    SidebarModule,
    TabMenuModule,
    ToolbarModule
  ],
})
export class PrimeNgModule { }
