import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServiceServiceService } from './services/service-service.service';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';
import SearchItem from './SearchItem';

@Component({
  selector: 'app-http-component',
  templateUrl: './http-component.component.html',
  styleUrls: ['./http-component.component.scss']
})
export class HttpComponentComponent implements OnInit {
  private searchField: FormControl;
  private loading: boolean = false;
  private results: SearchItem[];

  constructor(private itunes: ServiceServiceService) {
    this.searchField = new FormControl();
  }

  ngOnInit() {
    this.searchField.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap(term => this.itunes.search(term))
      )
      .subscribe(value => {
        console.log(value);
      });
  }

  doSearch(term: string) {
    this.loading = true;
    this.itunes.search(term).subscribe(data => {
      this.loading = false;
      this.results = data;
    });
  }

}
