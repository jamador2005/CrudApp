import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PrefsComponent } from './prefs/prefs.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-app';

  constructor(private _dialog: MatDialog) {}

  openPrefsForm()
  { 
    this._dialog.open(PrefsComponent);
  }
}