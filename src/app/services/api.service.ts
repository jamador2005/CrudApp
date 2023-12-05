import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { Country } from '../model/instance.model'



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private hhtpclient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'X-CSCAPI-KEY': '',
      'Access-Control-Allow-Origin': '*'
    })
  }

  getCountry(): Observable<any>{
    return this.hhtpclient.get('http://localhost:3000/country')
  }

  getInstance(instanceNumber:number): Observable<any>{
    console.log("starting getInstance() with parm : " + instanceNumber);
    return this.hhtpclient.get('https://archive-backend-corp-baw-dev.apps.caas.intranet.geodis.org/api2/getInstanceByINSTANCE_ID/'+instanceNumber,this.httpOptions)
  }


}

