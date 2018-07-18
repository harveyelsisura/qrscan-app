import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { API_URL } from "./global";
import 'rxjs/Rx';

@Injectable()

export class ServerService {

    token = localStorage.getItem('token');
    constructor(public http: Http) { }

    getInfo() {
        const headers = new Headers({ 'Content-type': 'application/json' });
        return this.http.get(`${API_URL}/qrscan/get_info`, { headers: headers });
    }
    getQR(id) {
        const headers = new Headers({ 'Content-type': 'application/json' });
        return this.http.get(`${API_URL}/qrscan/qr_specific_info/${id}`, { headers: headers });
    }

}