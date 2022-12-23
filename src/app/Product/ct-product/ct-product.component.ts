import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-ct-product',
  templateUrl: './ct-product.component.html',
  styleUrls: ['./ct-product.component.css']
})
export class CtProductComponent implements OnInit {

  product: any = null;
  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.productService.detail(id).subscribe(
      data => {
        this.product = data;
      },
      
    );
  }
  comeBack(): void {
    this.router.navigate(['/']);
  }

}
