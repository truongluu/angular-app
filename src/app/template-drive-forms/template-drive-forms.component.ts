import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-template-drive-forms',
  templateUrl: './template-drive-forms.component.html',
  styleUrls: ['./template-drive-forms.component.scss']
})
export class TemplateDriveFormsComponent implements OnInit, AfterViewInit {

  @ViewChild('f') form: any;
  constructor() { }

  ngOnInit() {
  }


  ngAfterViewInit() {
    console.log('view child', this.form);
  }
}
