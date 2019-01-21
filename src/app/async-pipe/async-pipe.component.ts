import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-async-pipe',
  styleUrls: ['./async-pipe.component.scss'],
  template: `
  <div class="card card-block">
<h4 class="card-title">AsyncPipe</h4>
<p class="card-text" ngNonBindable>{{ promise | async }}</p><p class="card-text">{{ observable | async }}</p>
</div>
`
})
export class AsyncPipeComponent implements OnInit {
  promise: Promise<string>;
  observableData: number;
  observable: Observable<number>;
  subscription: Subscription = null;

  constructor() {
    this.promise = this.getPromise();
    this.observable = this.getObservable();
  }

  ngOnInit() {
  }

  getPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise complete!"), 3000);
    });
  }

  getObservable() {
    return interval(1000)
      .pipe(
        take(10),
        map((v) => v * v)
      );
  }

  subscribeObservable() {
    this.subscription = this.getObservable()
      .subscribe(v => this.observableData = v);
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
