import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.scss']
})
export class NgifComponent implements OnInit {
  people: any[] = [
    {
      "name": "Douglas  Pace",
      "age": 10
    }, {
      "name": "Mcleod  Mueller",
      "age": 20
    },
    {
      "name": "Day  Meyers",
      "age": 30
    }, {
      "name": "Aguirre  Ellis",
      "age": 12
    },
    {
      "name": "Cook  Tyson",
      "age": 20
    }];
  constructor() { }

  ngOnInit() {
  }

}
