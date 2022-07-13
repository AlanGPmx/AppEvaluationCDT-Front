import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Product } from 'src/app/pages/products/interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http:HttpClient) { }
  private apiURL = 'http://localhost:3000/';
  products:Product[] = [];

  private cartSubject = new Subject<Product[]>();
  private totalSubject = new Subject<number>();
  private quantitySubject = new Subject<number>();


/* A getter that returns an observable of type Product[]. */
  get cartSAction$(): Observable<Product[]> {
    return this.cartSubject.asObservable();
  }

/* A getter that returns an observable of type number. */
  get totalAction$(): Observable<number> {
    return this.totalSubject.asObservable();
  }

/* A getter that returns an observable of type number. */
  get quantityAction$(): Observable<number> {
    return this.quantitySubject.asObservable();
  }

  updateCart(product:Product):void {
    this.addToCart(product);
    this.quantityProducts();
    this.calcTotal();
  }

/* A private method that adds a product to the cart. */
  private addToCart(product:Product):void {
    this.products.push(product);
    this.cartSubject.next(this.products);
  }

/* A private method that calculates the quantity of products in the cart. */
  private quantityProducts():void {
    const quantity = this.products.length;
    this.quantitySubject.next(quantity);
  }

/* A private method that calculates the total price of the products in the cart. */
  private calcTotal(): void {
    const total = this.products.reduce((sum, product) => sum += product.price, 0);
    this.totalSubject.next(total);
  }


}

