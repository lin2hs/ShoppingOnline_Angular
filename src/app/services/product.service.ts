import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from "../models/product.model";
import { ApiService } from 'src/app/services/api.service';

@Injectable()
export class ProductService {
  // constructor(private http: HttpClient) { }
  // baseUrl: string = 'http://localhost:8090/ashop/rest/api/product';

  // get() {
  //   return this.http.get<Product[]>(this.baseUrl);
  // }

  // getById(id: number) {
  //   return this.http.get<Product>(this.baseUrl + '/' + id);
  // }

  // create(product: Product) {
  //   return this.http.post(this.baseUrl, product);
  // }

  // update(product: Product) {
  //   return this.http.put(this.baseUrl + '/' + product.id, product);
  // }

  // delete(id: number) {
  //   return this.http.delete(this.baseUrl + '/' + id);
  // }
  constructor(private http: HttpClient, private apiService: ApiService) { }
  baseUrl: string = 'http://localhost:8090/ashop/rest/api/product';

  get() {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getById(id: number) {
    return this.http.get<Product>(this.baseUrl + '/' + id);
  }

  create(product: Product) {
    return new Promise((resolve, reject) => {
      this.apiService.post(this.baseUrl, product).then(() => {
        resolve();
      }).catch(err => {
        reject(err);
      })
    })
  }


  update(product: Product) {
    // return this.http.put(this.baseUrl + '/' + product.id, product);
    return new Promise((resolve, reject) => {
      this.apiService.put(this.baseUrl + '/' + product.id, product).then(() => {
        resolve();
      }).catch(err => {
        reject(err);
      })
    })
  }

  delete(id: number) {
    // return this.http.delete(this.baseUrl + '/' + id);
    return new Promise((resolve, reject) => {
      this.apiService.delete(`${this.baseUrl}/${id}`).then(() => {
        resolve();
        //  window.location.reload();
      }).catch(err => {
        reject();
        alert("Delete fail! <br>" + err);
      })
    })
  }
}
