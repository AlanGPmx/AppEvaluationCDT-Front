import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  private apiURL = 'http://localhost:8000/api/v1/';

  /* Getting the products from the API. */
  getProducts(): Observable<any> {
    return this.http.get<Product[]>(this.apiURL + 'productos');
  }

  /* Getting the product from the API with the ID. */
  getProduct(id: number): Observable<any> {
    return this.http.get<Product[]>(this.apiURL + 'productos/buscar?id=' + id);
  }

  /* Getting the best sellers from the API. */
  getBestSellers(): Observable<any> {
    return this.http.get<Product[]>(this.apiURL + 'productos/mas-vendidos');
  }
}
