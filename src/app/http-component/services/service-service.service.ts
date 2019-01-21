import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import SearchItem from '../SearchItem';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceServiceService {
  apiRoot: string = 'https://itunes.apple.com/search';

  constructor(private http: Http) {

  }

  search(term: string): Observable<SearchItem[]> {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.get(apiURL)
      .pipe(
        map(res => {
          return res.json().results.map(item => {
            return new SearchItem(
              item.trackName,
              item.artistName,
              item.trackViewUrl,
              item.artworkUrl30,
              item.artistId
            );
          });
        })
      );
  }
}
