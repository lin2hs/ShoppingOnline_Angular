import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Supplier } from "../models/supplier.model";

@Injectable()
export class SupplierService {
  // constructor(private http: HttpClient) { }
  // baseUrl: string = 'http://localhost:8090/ashop/rest/api/supplier';

  // get() {
  //   return this.http.get<Supplier[]>(this.baseUrl);
  // }

  // getById(id: number) {
  //   return this.http.get<Supplier>(this.baseUrl + '/' + id);
  // }

  // create(supplier: Supplier) {
  //   return this.http.post(this.baseUrl, supplier);
  // }

  // update(supplier: Supplier) {
  //   return this.http.put(this.baseUrl + '/' + supplier.id, supplier);
  // }

  // delete(id: number) {
  //   return this.http.delete(this.baseUrl + '/' + id);
  // }

  constructor(private http: HttpClient, private apiService:ApiService) { }
  baseUrl: string = 'http://localhost:8090/ashop/rest/api/supplier';

  get() {
    return this.http.get<Supplier[]>(this.baseUrl);
  }

  getById(id: number) {
    return this.http.get<Supplier>(this.baseUrl + '/' + id);
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

  
  create(supplier: Supplier){
    return new Promise((resolve, reject) => {
      this.apiService.post(this.baseUrl,supplier).then(() => {
        alert("Create successfully");
        resolve();
      }).catch(err => {
        reject(err);
      })
    })
  }
  

  update(supplier: Supplier) {
    // return this.http.put(this.baseUrl + '/' + supplier.id, supplier);
    return new Promise((resolve, reject) => {
      this.apiService.put(this.baseUrl + '/' + supplier.id,supplier).then(() => {
        alert("Update successfully");
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
       alert("Delete successfully");
       resolve();
      //  window.location.reload();
     }).catch(err => {
       reject();
       alert("Delete fail! <br>" + err);
     })
    })
  }
}