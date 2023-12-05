// https://www.youtube.com/watch?v=itq4KHN8buM&t=1387s

import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Injectable } from "@angular/core"
import {BehaviorSubject,Observable} from 'rxjs'
import { Country } from "../model/instance.model";
import { ApiService } from "./api.service";


@Injectable()
export class CountryDataSource extends DataSource<Country>{

constructor(private _apiService: ApiService ){
    super();
}

countrie$ = new BehaviorSubject<Country[]>([]);
isLoading$ = new BehaviorSubject<boolean>(false);

getCountries():void{
    this.isLoading$.next(true);
    this._apiService.getCountry().subscribe((countries)=>{
        this.countrie$.next(countries);
        this.isLoading$.next(false);
    });
}


connect():Observable<Country[]>{
    return this.countrie$.asObservable();
}

disconnect(): void {
    this.countrie$.complete();
}

}

