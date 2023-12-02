import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  processesList: string[] = [
    'proc-0', 'proc-1', 'proc-2'
  ];
}
