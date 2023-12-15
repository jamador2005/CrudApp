import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource, MatTableItem } from './mat-table-datasource';
import { SearchComponent } from '../search/search.component';
import { AppComponent } from '../app.component';
import { ApiService } from '../services/api/api.service';
import { Country, Instance } from '../model/instance.model';
import { Observable, connect, delay } from 'rxjs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

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
  
  businessDataParsed:string="";
  
  searching:boolean=false;
  instanceNumber:number=0;
  processName:string='';
  instanceStatus:string='';
  createdBy:string='';
  contextSearch:string='';
  endDate:Date= new Date();
  startDate:Date= new Date();
  processesList: string[] = [
    'TIBMSPO', 'FFBA', 'CAPEX'
  ];
  statusList: string[] = [
    'STATE_FINISHED', 'ACTIVE', 'COMPLETED','FAILED'
  ];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */

  //displayedColumns = ['id', 'name','iso2'];
  //displayedColumns = ['id','run_id','timestamp','instance_id','process_app','status','json_data'];
  displayedColumns = ['instance_id','process_app','status','json_data'];

  constructor(private apiService: ApiService) {
    this.dataSource = new MatTableDataSource();
  }

  
  /*ngOnInit{

  }*/

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
    this.getInstances(this.instanceNumber);
  }

  resetButton(){
    console.log("Reset button clicked");
    this.instanceNumber = 0;
    this.processName = '';
    this.createdBy = '';
    this.startDate = new Date() ;
    this.endDate = new Date;
    this.contextSearch = '';
    this.instanceStatus ='';
    while (this.dataSource.data.length) {
      this.dataSource.data.pop();
    }
    this.paginator._changePageSize(5);
  }


  //countries$ = new Observable<Country[]>()

  /*
  getCountries(){
    while (this.dataSource.data.length){
      this.dataSource.data.pop();
    }
    //this.dataSource.data.forEach(this.dataSource.data.pop());
    this.paginator._changePageSize(5);
    this.countries$ =  this.apiService.getCountry();
    this.countries$.subscribe(
      countries => {
        countries.forEach(
          country => {
                //console.log(country);;
                this.dataSource.data.push(country);
                //this.countryArray.push(country);
          }
         )
        //this.table.renderRows();
        this.paginator._changePageSize(5);
        //console.log(this.countryArray);
      }
    )
  } 
  */
  
  instances$ = new Observable<Instance[]>()

  getInstances(instanceNumber:number){
    //this.searching=true;
    //setTimeout(()=>{ this.searching=false; }, 4000)
    while (this.dataSource.data.length){
      this.dataSource.data.pop();
    }
    this.paginator._changePageSize(5);
    this.instances$ =  this.apiService.getInstance(instanceNumber);
    this.instances$.subscribe(
      instances => {
        instances.forEach(
          instance => {
                //console.log(country);;
                this.parseData(instance.json_data);
                instance.json_data = this.parseData(instance.json_data).substring(0,200)+" ...";
                //instance.json_data = instance.json_data.substring(0,200)+" ...";
                this.dataSource.data.push(instance);
                //this.countryArray.push(country);
          }
         )
        //this.table.renderRows();
        this.paginator._changePageSize(5);
        //console.log(this.countryArray);
      }
    )
    //this.searching=false;
  } 

  parseData(json:string){
    this.businessDataParsed="";
    const obj = JSON.parse(json);
    //console.log(obj.status);
    //console.log(obj.data.businessData);
    //console.log(obj.data.businessData.length);
    console.log(" has documents -- " + obj.data.documents.length);
    for(var k=0;k<obj.data.businessData.length;k++){
      //console.log(obj.data.businessData[k].name);
      //console.log(obj.data.businessData[k].value);
      this.businessDataParsed += (obj.data.businessData[k].label);
      this.businessDataParsed += "-";
      this.businessDataParsed += (obj.data.businessData[k].value);
      this.businessDataParsed += " // ";
    }
  return this.businessDataParsed;
  }


}
