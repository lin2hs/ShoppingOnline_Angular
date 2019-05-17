import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from "../models/order.model";
import { ApiService } from 'src/app/services/api.service';

@Injectable()
export class OrderService {
  constructor(private http: HttpClient, private apiService: ApiService) { }
  baseUrl: string = 'http://localhost:8090/ashop/rest/api/order';

  get() {
    return this.http.get<Order[]>(this.baseUrl);
  }

  getById(id: number) {
    return this.http.get<Order>(this.baseUrl + '/' + id);
  }

  create(order: Order) {
    // order.userid = userOrder;
    return new Promise((resolve, reject) => {
      this.apiService.post(this.baseUrl, order).then(() => {
        resolve();
      }).catch(err => {
        reject(err);
      })
    })
  }

  update(order: Order) {
    return new Promise((resolve, reject) => {
      this.apiService.put(this.baseUrl + '/' + order.id, order).then(() => {
        resolve();
      }).catch(err => {
        reject(err);
      })
    })
  }

  delete(id: number) {
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