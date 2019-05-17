import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { ApiService } from './api.service';
import { CookieService } from 'ngx-cookie-service';
import { Response } from '@angular/http';
import { EmailValidator } from '@angular/forms';

@Injectable()
export class UserService {
  // constructor(private http: HttpClient) { }
  // user: User;
  // baseUrl: string = 'http://localhost:8090/ashop/rest/api/auth/user';

  // get() {
  //   return this.http.get<User[]>(this.baseUrl + '/me');
  // }

  // getById(id: number) {
  //   return this.http.get<User>(this.baseUrl + '/' + id);
  // }

  // create(user: User) {
  //   return this.http.post(this.baseUrl, user);
  // }

  // update(user: User) {
  //   return this.http.put(this.baseUrl + '/' + user.id, user);
  // }

  // delete(id: number) {
  //   return this.http.delete(this.baseUrl + '/' + id);
  // }
  readonly rootUrl = 'http://localhost:8090/ashop/rest/api/';
  constructor(private http: HttpClient, private apiService: ApiService, private cookieService: CookieService) { }
  user: User;


  login(name, password) {
    // alert(username + " " + password)
    return new Promise<User>((resolve, reject) => {
      this.apiService.login(`${this.rootUrl}auth/user/login`, {
        name: name,
        password: password
      }).then((res: Response) => {
        // this.apiService.token = res.json();
        this.apiService.token = JSON.stringify(res);
        console.log(this.apiService.token)
        this.cookieService.set('Authorization', this.apiService.token);
        this.getAuthorize().then(user => {
          resolve(user);
        }).catch(err => {
          reject(err);
        });
      })
    });
  }

  signup(name, password, email) {
    alert(name + " " + password + " " + email);
    return new Promise<User>((resolve, reject) => {
      this.apiService.postWithoutAuth(`${this.rootUrl}auth/user/sign-up`, {
        name: name,
        password: password,
        email: email,
      }).then((res: Response) => {
        // this.apiService.token = res.json();
        //   this.apiService.token = JSON.stringify(res);
        //   console.log(this.apiService.token)
        //   this.cookieService.set('Authorization', this.apiService.token);
        //   this.getAuthorize().then(user => {
        //     resolve(user);
        //   }).catch(err => {
        //     reject(err);
        //   });
        resolve();
      }).catch(err => {
        reject(err);
      })
    });
  }

  getAuthorize() {
    return new Promise<User>((resolve, reject) => {
      this.apiService.get(`auth/user/me`).then((res: Response) => {
        this.user = res.json();
        sessionStorage.setItem("user", JSON.stringify(res.json()));
        sessionStorage.setItem("username", this.user.name);
        sessionStorage.setItem("role", this.user.role);
        resolve(this.user);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
