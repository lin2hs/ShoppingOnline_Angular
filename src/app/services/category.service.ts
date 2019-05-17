import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from "../models/category.model";
import { ApiService } from 'src/app/services/api.service';

@Injectable()
export class CategoryService {
  // constructor(private http: HttpClient) { }
  // baseUrl: string = 'http://localhost:8090/ashop/rest/api/category';

  // get() {
  //   return this.http.get<Category[]>(this.baseUrl);
  // }

  // getById(id: number) {
  //   return this.http.get<Category>(this.baseUrl + '/' + id);
  // }

  // create(category: Category) {
  //   return this.http.post(this.baseUrl, category);
  // }

  // update(category: Category) {
  //   return this.http.put(this.baseUrl + '/' + category.id, category);
  // }

  // delete(id: number) {
  //   return this.http.delete(this.baseUrl + '/' + id);
  // }
  constructor(private http: HttpClient, private apiService: ApiService) { }
  category: Category;
  // user: User = {
  //   id: 0,
  //   name: '',
  //   password: '',
  //   email: '',
  //   role: ''
  // };
  data: any = [];
  baseUrl: string = 'http://localhost:8090/ashop/rest/api/category';

  get() {
    return this.http.get<Category[]>(this.baseUrl);
  }

  getById(id: number) {
    return this.http.get<Category>(this.baseUrl + '/' + id);
  }

  // create(category: Category) {
  //   return this.http.post(this.baseUrl, category);
  // }
  create(category: Category) {

    return new Promise((resolve, reject) => {
      this.apiService.post(this.baseUrl, category).then(() => {
        resolve();
      }).catch(err => {
        reject(err);
      })
    })
  }


  update(category: Category) {
    // return this.http.put(this.baseUrl + '/' + category.id, category);
    // var user = JSON.parse(window.sessionStorage.getItem("user"));
    // alert(user);
    // this.data[0][0][0] = category;
    // this.data[0][0][1] = user;
    // console.log("coi ne" + this.data);
    return new Promise((resolve, reject) => {
      this.apiService.put(this.baseUrl + '/' + category.id, category).then(() => {
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
