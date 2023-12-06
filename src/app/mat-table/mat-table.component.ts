import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource, MatTableItem } from './mat-table-datasource';
import { SearchComponent } from '../search/search.component';
import { AppComponent } from '../app.component';

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

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
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
}
