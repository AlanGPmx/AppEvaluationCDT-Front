import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HeaderModule,
    MaterialModule,
  ],
  exports: [ProductsComponent]
})
export class ProductsModule { }
