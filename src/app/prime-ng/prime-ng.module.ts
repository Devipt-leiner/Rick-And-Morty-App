import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonModule} from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    MenuModule
  ],
  exports: [
    ButtonModule,
    ImageModule,
    MenuModule
  ],
})
export class PrimeNgModule { }
