import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from "../models/order.model";

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8090/ashop/rest/api/order';

  get() {
    return this.http.get<Order[]>(this.baseUrl);
  }

  getById(id: number) {
    return this.http.get<Order>(this.baseUrl + '/' + id);
  }

  create(supplier: Order) {
    return this.http.post(this.baseUrl, supplier);
  }

  update(supplier: Order) {
    return this.http.put(this.baseUrl + '/' + supplier.id, supplier);
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}