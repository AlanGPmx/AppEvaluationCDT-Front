import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Product } from './interface/product.interface';
import { ProductsService } from './services/products.service';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsService, private ShoppingCartService: ShoppingCartService) { }
  products!: Product[];

  ngOnInit(): void {
    this.productsService.getProducts().pipe(
      tap( (products: Product[]) => this.products = products )
    ).subscribe();
  }

  addToCart(product:Product) :void {
    this.ShoppingCartService.updateCart(product);
  }

}
