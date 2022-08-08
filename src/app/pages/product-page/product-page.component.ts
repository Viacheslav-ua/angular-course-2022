import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  title = 'angular course 2022'
  // products: IProduct[] = []
  // products$: Observable<IProduct[]>
  term = ''

  loading = false

  constructor(
    public productsService: ProductService,
    public modalService: ModalService,
  ) {}

  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productsService.getAll().pipe(
    //   tap(() => this.loading = false)
    // )

    this.productsService.getAll().subscribe(() => {
      this.loading = false
    })

  }

}
