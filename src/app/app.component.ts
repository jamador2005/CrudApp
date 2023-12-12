import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PrefsComponent } from './prefs/prefs.component';
import { Country, Instance } from './model/instance.model';
import { ApiService } from './services/api/api.service'
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    //this.fetchCountries();
    //this.fetchInstances();
  }

  title = 'crud-app';

  instanceNumber: number = 0;
  processName: string = '';
  createdBy: string = '';
  startDate: Date = new Date;
  endDate: Date = new Date;
  contextSearch: string = '';

  processesList: string[] = [
    'proc-0', 'proc-1', 'proc-2'
  ];

  listCountries!: Country[];
  listInstances!: Instance[];
  countries$ = new Observable<Country[]>();

  constructor(
    private _dialog: MatDialog,
    private _apiCall: ApiService
  ) { }

  openPrefsForm() {
    this._dialog.open(PrefsComponent);
  }

  searchButton(){
    console.log("Search button clicked");
    console.log(this.instanceNumber);
    console.log(this.processName);
    console.log(this.createdBy);
    console.log(this.startDate);
    console.log(this.endDate);
    console.log(this.contextSearch);
    this.countries$ = this._apiCall.getCountry();
    //this.fetchCountries();
  }
  resetButton(){ 
    console.log("Reset button clicked");
    this.instanceNumber = 0;
    this.processName = '';
    this.createdBy = '';
    this.startDate = new Date();
    this.endDate = new Date;
    this.contextSearch = '';
  }

  fetchCountries() {
    this._apiCall.getCountry().subscribe(data => {
      this.listCountries = data
      console.log('list of countries', this.listCountries)
    })
  }
  
  fetchInstances() {
    this._apiCall.getInstance(14504).subscribe(data => {
      this.listInstances = data
      console.log('list of instances', this.listInstances)
    })
  }
  

}
