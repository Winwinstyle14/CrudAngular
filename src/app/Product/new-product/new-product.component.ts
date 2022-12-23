import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  name = '';
  price:any =null;

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const productNew = new Product (this.name, this.price);
    this.productService.save(productNew).subscribe(
      data => {
        this.router.navigate(['/']);
      }
    );
  }

}
