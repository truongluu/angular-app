import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.myForm = fb.group({
      name: fb.group({
        firstName: new FormControl("", Validators.required),
        lastName: new FormControl("", Validators.required),
      }),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern('[^\s@]+@[^\s@]+')
      ])
    });
  }

  ngOnInit() {
  }

}
