import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from "../models/category.model";

@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8090/ashop/rest/api/category';

  get() {
    return this.http.get<Category[]>(this.baseUrl);
  }

  getById(id: number) {
    return this.http.get<Category>(this.baseUrl + '/' + id);
  }

  create(category: Category) {
    return this.http.post(this.baseUrl, category);
  }

  update(category: Category) {
    return this.http.put(this.baseUrl + '/' + category.id, category);
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
