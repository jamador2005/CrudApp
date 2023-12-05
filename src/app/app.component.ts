import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PrefsComponent } from './prefs/prefs.component';
import { Country, Instance } from './model/instance.model';
import { ApiService } from './services/api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    this.fetchCountries();
    this.fetchInstances();
  }

  title = 'crud-app';

  listCountries!: Country[];
  listInstances!: Instance[];

  constructor(
    private _dialog: MatDialog,
    private _apiCall: ApiService
  ) { }

  openPrefsForm() {
    this._dialog.open(PrefsComponent);
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
