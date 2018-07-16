import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { API_URL } from "./global";
import 'rxjs/Rx';

@Injectable()

export class ServerService {

    token = localStorage.getItem('token');
    constructor(public http: Http) { }

    // login(data) {
    //     const
    //         url = `${API_URL}/myAPI/v1/login`,
    //         body = JSON.stringify(data);
    //     const headers = new Headers({ 'Content-type': 'application/json' });
    //     return this.http.post(url, body, { headers: headers });
    // };
    // /myAPI/v1/display_accounts
    getInfo() {
        const headers = new Headers({ 'Content-type': 'application/json'});
        return this.http.get(`${API_URL}/qrscan/get_info`, { headers: headers });
    }


}