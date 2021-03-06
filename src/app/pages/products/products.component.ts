import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Product } from './interface/product.interface';
import { ProductsService } from './services/products.service';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';
import { LocationStrategy } from '@angular/common';
import { Respuesta } from './interface/respuesta.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private ShoppingCartService: ShoppingCartService,
    private url: LocationStrategy
  ) {}
  res!: Respuesta;
  showMenu!: boolean;

  ngOnInit(): void {
      this.productsService
      .getProducts()
      .pipe(tap((res: Respuesta) => (this.res = res)))
      .subscribe();

    if (this.url.path() === '/products') {
      this.showMenu = true;
    }
  }

  parse2JSON(str: string): any{
    return (typeof str === null) ? [] : JSON.parse(str);
  }

  /* A function that is called when the user clicks on the add to cart button. */
  public addToCart(product: Product): void {
    this.ShoppingCartService.updateCart(product);
  }
}
