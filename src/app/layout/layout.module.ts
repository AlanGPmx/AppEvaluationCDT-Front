import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { LayoutComponent } from './layout.component';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { ProductsModule } from '../pages/products/products.module';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    MaterialModule,
    CommonModule,
    HeaderModule,
    MdbCarouselModule,
    ProductsModule,
    IvyCarouselModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
