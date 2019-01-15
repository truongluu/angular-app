import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent implements OnInit {
  people: any[] = [
    {
      "name": "Douglas  Pace"
    }, {
      "name": "Mcleod  Mueller"
    },
    {
      "name": "Day  Meyers"
    }, {
      "name": "Aguirre  Ellis"
    },
    {
      "name": "Cook  Tyson"
    }];
  constructor() { }

  ngOnInit() {
  }

}
