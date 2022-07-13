import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [HeaderComponent, CartComponent],
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
