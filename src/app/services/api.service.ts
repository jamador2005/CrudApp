import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { Country } from '../model/instance.model'


// https://countrystatecity.in/


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private hhtpclient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'X-CSCAPI-KEY': ''
    })
  }

  getCountry(): Observable<any>{
    return this.hhtpclient.get('http://localhost:3000/country')
  }
}

