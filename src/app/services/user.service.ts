import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable()
export class UserCurrentService {
  constructor(private http: HttpClient) { }
  user: User;
  baseUrl: string = 'http://localhost:8090/ashop/rest/api/auth/user';

  get() {
    return this.http.get<User[]>(this.baseUrl + '/me');
  }

  getById(id: number) {
    return this.http.get<User>(this.baseUrl + '/' + id);
  }

  create(user: User) {
    return this.http.post(this.baseUrl, user);
  }

  update(user: User) {
    return this.http.put(this.baseUrl + '/' + user.id, user);
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
