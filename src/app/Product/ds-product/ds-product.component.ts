import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/Model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-ds-product',
  templateUrl: './ds-product.component.html',
  styleUrls: ['./ds-product.component.css']
})
export class DsProductComponent implements OnInit {

  products: Product[]=[];
  constructor(private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.listProducts();
  }
  listProducts(): void {
    this.productService.allProducts().subscribe(
      (data) => {
        this.products = data
      },
      
    );
  }
  deleteds(id: any) {
    this.productService.delete(id).subscribe(
      data => {
        this.listProducts();
      },
     
    );
    
  }


}
