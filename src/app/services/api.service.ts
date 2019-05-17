import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Token } from '@angular/compiler';
import { CookieService } from 'ngx-cookie-service';
import { reject } from 'q';

@Injectable()
export class ApiService {
    token: string = "none";
    authorization: string = "";
    host: string = 'http://localhost:8090/ashop/rest/api/';

    // authorization: any;
    constructor(private http: Http, private cookieService: CookieService) {
        if (this.cookieService.check('Authorization')) this.token = this.cookieService.get('Authorization');
    }
    login(url: string, data: any) {
        // var s = this.cookieService.get('Authorization');
        return new Promise<Response>((resolve, reject) => {
            let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
            headers.append('Authorization', this.token);
            this.http.post(url, data, { headers: headers })
                .toPromise()
                .then(res => {
                    if (res.status == 200) {
                        resolve(res);
                    } else {
                        // alert("");
                        reject("Error");
                    }
                }).catch(err => {
                    alert("Wrong username or password");
                    reject(err);
                });
        })
    }

    postWithoutAuth(url: string, data: any) {
        return new Promise((resolve, reject) => {
            this.http.post(url, data).toPromise().then(() => {
                resolve();
            }).catch(err => {
                reject(err);
            })
        })
    }

    post(url: string, data: any) {
        var s = this.cookieService.get('Authorization');
        var json = JSON.parse(s);
        return new Promise<Response>((resolve, reject) => {
            let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
            headers.append('Authorization', json.headers.authorization);
            this.http.post(url, data, { headers: headers })
                .toPromise()
                .then(res => {
                    if (res.status == 200) {
                        resolve(res);
                    } else {
                        reject("Error");
                    }
                }).catch(err => {
                    reject(err);
                });
        })
    }

    get(url: string) {
        return new Promise((resolve, reject) => {
            var s = this.cookieService.get('Authorization');
            var json = JSON.parse(s);
            let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
            headers.append('Authorization', json.headers.authorization);
            headers.append('Access-Control-Expose-Headers', "Access-Token, Uid");
            this.http.get(this.host + url, { headers: headers })
                .toPromise()
                .then(res => {
                    resolve(res);
                    if (res.status != 200) {
                        reject("Error")
                    }
                }).catch(err => {
                    reject(err);
                });
        })
    }

    //delete
    delete(url: string) {
        return new Promise<Response>((resolve, reject) => {
            var s = this.cookieService.get('Authorization');
            var json = JSON.parse(s);
            let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
            headers.append('Authorization', json.headers.authorization);
            headers.append('Access-Control-Expose-Headers', "Access-Token, Uid");
            this.http.delete(url, { headers: headers })
                .toPromise()
                .then(res => {
                    if (res.status == 200) {
                        resolve(res);
                    } else {
                        reject("Error");
                    }
                }).catch(err => {
                    reject(err);
                });
        })
    }

    put(url: string, data: any) {
        var s = this.cookieService.get('Authorization');
        var json = JSON.parse(s);
        return new Promise<Response>((resolve, reject) => {
            let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
            headers.append('Authorization', json.headers.authorization);
            this.http.put(url, data, { headers: headers })
                .toPromise()
                .then(res => {
                    if (res.status == 200) {
                        resolve(res);
                    } else {
                        reject("Error");
                    }
                }).catch(err => {
                    reject(err);
                });
        })
    }
}
