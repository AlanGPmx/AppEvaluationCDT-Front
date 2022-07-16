import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  private apiURL = 'https://cecyt3-ipn.com/CDT/index.php/productos/';

  /* Getting the products from the API. */
  getProducts(): Observable<any> {
    return this.http.get<Product[]>(this.apiURL + 'obtenerProductos');
  }

  /* Getting the product from the API with the ID. */
  getProduct(id: number): Observable<any> {
    return this.http.get<Product[]>(this.apiURL + 'obtenerProducto/' + id);
  }

  /* Getting the best sellers from the API. */
  getBestSellers(): Observable<any> {
    return this.http.get<Product[]>(this.apiURL + 'obtenerProductosMasVendidos');
  }
}
