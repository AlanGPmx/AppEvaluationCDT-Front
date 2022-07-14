import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interface/product.interface';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css']
})
export class SingleViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private url: LocationStrategy) { }
  showLinkMore!: boolean;
  products!: Product[];

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    if (this.url.path() === '/product'+id) {
      this.showLinkMore = false;  // WIP: show link more everywhere except in single view
    }
    this.showLinkMore = true;
  }

}
