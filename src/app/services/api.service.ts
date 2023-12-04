import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// https://countrystatecity.in/


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private hhtpclient: HtppClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type':'application/json',
      'X-CSCAPI-KEY':''
    })
}
