import { Component, OnInit } from '@angular/core';
import { map, filter, retry, delay, catchError } from 'rxjs/operators';
import { ajax  } from 'rxjs/ajax';
import { from, fromEvent, interval, pipe, of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  constructor() {
    const nums = of(1, 2, 3, 4, 5);
 
    const squareOddVals = pipe(
      filter((n: number) => n % 2 !== 0),
      map(n => n * n)
    );
    

    const squareOdd = squareOddVals(nums);

    // Suscribe to run the combined functions
    squareOdd.subscribe(x => console.log(x));

    const apiData = ajax('/api/data').pipe(
      retry(3), // Retry up to 3 times before failing
      
      map(res => {
        if (!res.response) {
          throw new Error('Value expected!');
        }
        return res.response;
      }),
      catchError(err => of(['error']))
    );
     
    apiData.subscribe({
      next(x) { console.log('data: ', x); },
      error(err) { console.log('errors already caught... will not run'); }
    });
  }

  ngOnInit() {
  }

}
