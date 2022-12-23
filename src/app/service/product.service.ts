import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productURL: string = 'http://localhost:8080/product/';
  constructor(private httpClient: HttpClient) { }

  public allProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productURL + 'Allproduct');
  }
  public detail(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.productURL + `detail/${id}`);
  }

  public detailName(name: string): Observable<Product> {
    return this.httpClient.get<Product>(this.productURL + `detailname/${name}`);
  }

  public save(product: Product): Observable<any> {
    return this.httpClient.post<any>(this.productURL + 'create', product);
  }

  public update(id: number, product: Product): Observable<any> {
    return this.httpClient.put<any>(this.productURL + `update/${id}`, product);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.productURL + `delete/${id}`);
  }
}