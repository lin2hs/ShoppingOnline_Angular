import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from "../models/product.model";

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8090/ashop/rest/api/product';

  get() {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getById(id: number) {
    return this.http.get<Product>(this.baseUrl + '/' + id);
  }

  create(product: Product) {
    return this.http.post(this.baseUrl, product);
  }

  update(product: Product) {
    return this.http.put(this.baseUrl + '/' + product.id, product);
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
