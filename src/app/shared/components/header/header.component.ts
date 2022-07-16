import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html', // Se puede usar el TempleateInline pero se deja por defecto aunque no haya muchas lineas escritas
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private ShoppingCartService: ShoppingCartService
  ) {}
  quantity$ = this.ShoppingCartService.quantityAction$;
  total$ = this.ShoppingCartService.totalAction$;
  cart$ = this.ShoppingCartService.cartSAction$;

  ngOnInit(): void {
  }
}
