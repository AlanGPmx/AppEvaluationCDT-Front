import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';


@Component({
  selector: 'app-cart',
  template: `
  <ng-container *ngIf="{ total: total$ | async, quantity: quantity$ | async } as dataCart">
    {{ dataCart.total | currency }} ({{ dataCart.quantity }})
  </ng-container>
  `,
})
export class CartComponent implements OnInit {

  constructor(private ShoppingCartService: ShoppingCartService) { }
  quantity$ = this.ShoppingCartService.quantityAction$;
  total$ = this.ShoppingCartService.totalAction$;
  cart$ = this.ShoppingCartService.cartSAction$;

  ngOnInit(): void {
  }

}
