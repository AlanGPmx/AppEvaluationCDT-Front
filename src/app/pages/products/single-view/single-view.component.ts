import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { Product } from '../interface/product.interface';
import { RespuestaOne } from '../interface/respuesta.interface';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css'],
})
export class SingleViewComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService,
    private url: LocationStrategy
  ) {}
  showLinkMore!: boolean;
  res!: RespuestaOne;
  buttonDisabled!: boolean;

  ngOnInit(): void {
    this.buttonDisabled = true;
    let id = this.route.snapshot.params['id'];

    if (this.url.path() === '/product' + id) {
      this.showLinkMore = false; // WIP: show link more everywhere except in single view
    }
    this.showLinkMore = true;

    this.productsService
      .getProduct(id)
      .pipe(tap((res: RespuestaOne) => (this.res = res)))
      .subscribe();
  }

  changeOption(value: string): void {
    this.res.resultado.selected = value;
  }

  allowAddToCart(): void {
    this.buttonDisabled = false;
  }

  /* A function that is called when the user clicks on the add to cart button. */
  public addToCart(): void {
    this.shoppingCartService.updateCart(this.res.resultado);
  }

  parse2JSON(str: string): any{
    return (typeof str === null) ? [] : JSON.parse(str);
  }

  /**
   * If the type of the value is a number, return true, otherwise return false.
   * @param {any} val - The value to check.
   * @returns A boolean value.
   */
  isNumber(val: any): boolean {
    return this.shoppingCartService.isNumber(val);
  }
}
