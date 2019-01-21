import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-reactive-modal-form',
  templateUrl: './reactive-modal-form.component.html',
  styleUrls: ['./reactive-modal-form.component.scss']
})
export class ReactiveModalFormComponent implements OnInit {
  searchField: FormControl;
  searches: string[] = [];

  constructor() { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe(term => {
        this.searches.push(term);
      });
  }

}
