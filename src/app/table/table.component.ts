import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Country, Instance } from '../model/instance.model'
import { ApiService } from '../services/api/api.service'
import { CommonModule } from '@angular/common';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
    selector: 'table-basic-example',
    styleUrls: ['table.component.css'],
    templateUrl: 'table.component.html',
    standalone: true,
    imports: [MatTableModule,CommonModule]
})
export class TableBasicExample implements OnInit{

    instanceNumber: number = 0;
    processName: string = '';
    createdBy: string = '';
    startDate: Date = new Date;
    endDate: Date = new Date;
    contextSearch: string = '';

    processesList: string[] = [
        'proc-0', 'proc-1', 'proc-2'
    ];

    displayedColumns: string[] = ['id', 'name', 'iso2'];
    dataSource = []//ELEMENT_DATA;

    constructor(private _apiCall: ApiService){
    }

    public listCountries!: Country[];

    ngOnInit(){
        this.fetchInstances()
    }


    fetchInstances() {
        this._apiCall.getCountry().subscribe(data => {
            this._apiCall = data
            console.log('list of countries -- ', data)
            this.dataSource = data
        })
    }

    searchButton() {

    }
    resetButton() {

    }
}
