import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { ProductService } from './services/products.service';
// import { products as data } from './data/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  
  title = 'angular course 2022'

  // products = data
  products: IProduct[] = []

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.productsService.getAll().subscribe((products) => {
      // console.log(products);
      this.products = products
    })
  }
}
