import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Voucher } from "../models/voucher.model";
import { ApiService } from "./api.service";

@Injectable()
export class VoucherService {

  constructor(private http: HttpClient, private apiService:ApiService) { }
  baseUrl: string = 'http://localhost:8090/ashop/rest/api/voucher';

  get() {
    return this.http.get<Voucher[]>(this.baseUrl);
  }

  getById(id: number) {
    return this.http.get<Voucher>(this.baseUrl + '/' + id);
  }

  // create(supplier: Supplier) {
  //   return this.http.post(this.baseUrl, supplier);
  // }

  // update(supplier: Supplier) {
  //   return this.http.put(this.baseUrl + '/' + supplier.id, supplier);
  // }

  // delete(id: number) {
  //   return this.http.delete(this.baseUrl + '/' + id);
  // }

  
  create(supplier: Voucher){
    return new Promise((resolve, reject) => {
      this.apiService.post(this.baseUrl,supplier).then(() => {
        resolve();
      }).catch(err => {
        reject(err);
      })
    })
  }
  

  update(supplier: Voucher) {
    // return this.http.put(this.baseUrl + '/' + supplier.id, supplier);
    return new Promise((resolve, reject) => {
      this.apiService.put(this.baseUrl + '/' + supplier.id,supplier).then(() => {
        resolve();
      }).catch(err => {
        reject(err);
      })
    })
  }

  delete(id: number) {
    // return this.http.delete(this.baseUrl + '/' + id);
    return new Promise((resolve, reject)=>{
     this.apiService.delete(`${this.baseUrl}/${id}`).then(()=>{
       resolve();
      //  window.location.reload();
     }).catch(err => {
       reject();
       alert("Delete fail! <br>" + err);
     })
    })
  }
}