import { Component, OnInit } from '@angular/core'
import { Observable, tap } from 'rxjs'
import { IProduct } from './models/product'
import { ProductService } from './services/products.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    
  title = 'angular course 2022'
  // products: IProduct[] = []
  products$: Observable<IProduct[]>
  term = ''

  loading = false

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productsService.getAll().pipe(
      tap(() => this.loading = false)
    )
    
    // // throw new Error('Method not implemented.');
    // this.productsService.getAll().subscribe((products) => {
    //   // console.log(products);
    //   this.products = products
    //   this.loading = false
    // })
     
  }
}
