import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Product } from './interface/product.interface';
import { ProductsService } from './services/products.service';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';
import { LocationStrategy } from '@angular/common';

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
  products!: Product[];
  showMenu!: boolean;

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .pipe(tap((products: Product[]) => (this.products = products)))
      .subscribe();

    if (this.url.path() === '/products') {
      this.showMenu = true;
    }
  }

  /* A function that is called when the user clicks on the add to cart button. */
  public addToCart(product: Product): void {
    this.ShoppingCartService.updateCart(product);
  }
}
