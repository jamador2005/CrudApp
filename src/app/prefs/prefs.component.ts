import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-prefs',
  templateUrl: './prefs.component.html',
  styleUrls: ['./prefs.component.css']
})
export class PrefsComponent {

  prefsForm : FormGroup;
  constructor(private _fb: FormBuilder) {
    this.prefsForm = this._fb.group({
      email:'',
      number:'',
      date1:'',
      date2:'',
      radio:'',
      select:'',
    })
  }

  
  PrefsSave() {
  }
  PrefsCancel() {
  }
  

  onFormSubmit() {
    if (this.prefsForm.valid) {
      console.log(this.prefsForm.value);
      }
  }

  foods: string[] = [
    'steak-0','pizza-1','tacos-2'
  ];
  
}
