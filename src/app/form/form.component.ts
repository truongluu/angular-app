import { Component, OnInit } from '@angular/core';
import { map, filter, tap } from "rxjs/operators";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  comment = new FormControl("", Validators.required);
  name = new FormControl("", Validators.required);
  email = new FormControl("", [
    Validators.required,
    Validators.pattern("[^ @]*@[^ @]*")
  ]);
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      "comment": this.comment,
      "name": this.name,
      "email": this.email
    });
    this.form.valueChanges
      .pipe(
        filter(data => this.form.valid),
        map(data => {
          data.comment = data.comment.replace(/<(?:.|\n)*?>/gm, "");
          return data;
        }),
        tap(value => {
          console.log('value', value);
          
        }),
        map(data => {
          data.lastUpdateTS = new Date();
          return data;
        })
      )
      .subscribe(data => console.log(JSON.stringify(data)));
  }

  ngOnInit() {
  }

}
