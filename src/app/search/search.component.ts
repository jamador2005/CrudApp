import { Component, OnInit } from '@angular/core';
import { DateRange } from '@angular/material/datepicker';
import { Instance } from '../model/instance.model'
import { ApiService } from '../services/api.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private _apiCall: ApiService
  ) { }

  public listInstances!: Instance[];

  instanceNumber: number = 0;
  processName: string = '';
  createdBy: string = '';
  startDate: Date = new Date;
  endDate: Date = new Date;
  contextSearch: string = '';

  processesList: string[] = [
    'proc-0', 'proc-1', 'proc-2'
  ];

  searchButton() {
    console.log("Search button clicked");
    console.log(this.instanceNumber);
    console.log(this.processName);
    console.log(this.createdBy);
    console.log(this.startDate);
    console.log(this.endDate);
    console.log(this.contextSearch);
    this.fetchInstances(
      this.instanceNumber,
      this.processName,
      this.createdBy,
      this.startDate,
      this.endDate,
      this.contextSearch);

  }

  fetchInstances(
    instanceNumber: number,
    processName: string,
    createdBy: string,
    startDate: Date,
    endDate: Date,
    contextSearch: string) {
    this._apiCall.getInstance(this.instanceNumber).subscribe(data => {
      this.listInstances = data
      console.log('list of instances', this.listInstances)
    })
  }

  resetButton() {
    console.log("Reset button clicked");
    this.instanceNumber = 0;
    this.processName = '';
    this.createdBy = '';
    this.startDate = new Date();
    this.endDate = new Date;
    this.contextSearch = '';
  }

  ngOnInit() {
    //create the observer
    const observer = {
      next: (item: unknown) => console.log('item arrived ${item}'),
      error: (err: unknown) => console.log('We have an error ${err}'),
      complete: () => console.log('stream complete')
    }

    // create the observable
    const stream = new Observable(myObserver => {
      myObserver.next(this.instanceNumber);
    })

    stream.subscribe(observer);
  }



}
