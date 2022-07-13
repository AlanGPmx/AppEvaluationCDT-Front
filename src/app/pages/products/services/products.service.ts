import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  private apiURL = 'http://localhost:3000/';

  getProducts(): Observable<any> {
    return this.http.get<Product[]>(this.apiURL+'products');
  }

}

