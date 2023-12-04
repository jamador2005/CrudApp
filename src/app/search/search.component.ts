import { Component } from '@angular/core';
import { DateRange } from '@angular/material/datepicker'; 

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  instanceNumber: number = 0;
  processName: string = '';
  createdBy: string = '';
  startDate:Date=new Date;
  endDate:Date=new Date;
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
  }

  resetButton() {
    console.log("Reset button clicked");
    console.log(this.instanceNumber);
    console.log(this.processName);
    console.log(this.createdBy);
  }

}
