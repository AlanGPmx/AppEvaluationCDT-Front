import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Product } from '../pages/products/interface/product.interface';
import { ProductsService } from '../pages/products/services/products.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  bestSellers!: Product[];

  images = [
    {
      title: '',
      description: '',
      path: 'https://elektra.vtexassets.com/assets/vtex.file-manager-graphql/images/1a07dabe-3a33-4cc3-afc8-bc890c26876f___b1cbef3cc02fbd5c3ac79119c02225d9.webp',
    },
    {
      title: '',
      description: '',
      path: 'https://elektra.vtexassets.com/assets/vtex.file-manager-graphql/images/eb94b557-d853-40bf-8235-ae3326e74868___2fe5e3a1bf4810a977492fdf54ee6019.webp',
    },
    {
      title: '',
      description: '',
      path: 'https://elektra.vtexassets.com/assets/vtex.file-manager-graphql/images/8d3166a1-b6c6-447e-aa54-035ffd35e48c___6a774189391b088a9d9b153e62af47b8.webp',
    },
  ];

  ngOnInit(): void {
    this.productsService
      .getBestSellers()
      .pipe(
        tap(
          (bestSellers: Product[]) =>
            (this.bestSellers = bestSellers.map((obj) => {
              return {
                id: obj.id,
                name: obj.name,
                price: obj.price,
                withDiscount: obj.withDiscount,
                description: obj.description,
                categoryId: obj.categoryId,
                stock: obj.stock,
                path: obj.img,
                options: obj.options,
              };
            }))
        )
      )
      .subscribe();
  }
}
