import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../interface/product.interface';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';

@Component({
  providers: [ShoppingCartService],
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Output() addToCartClick = new EventEmitter<Product>();
  buttonDisabled!: boolean;
  showLinkMore!: boolean;

  constructor(
    private shoppingCartService: ShoppingCartService,
  ) {}

  ngOnInit(): void {
    this.buttonDisabled = true;
  }

  addToCart(): void {
    this.addToCartClick.emit(this.product);
  }

  changeOption(value: string): void {
    this.product.selected = value;
  }

  allowAddToCart(): void {
    this.buttonDisabled = false;
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
