import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource, MatTableItem } from './mat-table-datasource';
import { SearchComponent } from '../search/search.component';
import { AppComponent } from '../app.component';
import { CountryDataSource } from '../services/country.datasource'
import { ApiService } from '../services/api.service';
import { Country, Instance } from '../model/instance.model'

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<MatTableItem>;
  dataSource: MatTableDataSource;
  
  instanceNumber:number=0;
  processName:string='';
  createdBy:string='';
  contextSearch:string='';
  endDate:Date= new Date();
  startDate:Date= new Date();
  processesList: string[] = [
    'proc-0', 'proc-1', 'proc-2'
  ];

  public listCountries!: Country[];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(private _apiService:ApiService) {
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    console.log("ngAfterViewInit() mat table component ts");
  }

  searchButton(){
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

  resetButton(){
    console.log("Reset button clicked");
    this.instanceNumber = 0;
    this.processName = '';
    this.createdBy = '';
    this.startDate = new Date() ;
    this.endDate = new Date;
    this.contextSearch = '';
  }

  fetchInstances(
    instanceNumber:number,
    processName:string,
    createdBy:string,
    startDate:Date,
    endDate:Date,
    contextSearch:string) {
    this._apiService.getCountry().subscribe(data => {
      this.listCountries = data
      this.dataSource.data=this.listCountries
      console.log('list of instances', this.listCountries)
    })
  }
}
