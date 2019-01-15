import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  OnDestroy,
  ViewChild,
  ViewChildren,
  SimpleChanges,
  AfterViewInit,
  AfterContentInit,
  QueryList,
  HostListener
} from '@angular/core';

export class Joke {
  public setup: string;
  public punchline: string;
  public hide: boolean;

  constructor(setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}

@Component({
  selector: 'joke',
  template: `
  <div class="card card-block appCardHolder">
<h4 class="card-title">
  <ng-content select=".setup"></ng-content>
</h4>
<p class="card-text"
  [style.display]="'none'">
  <ng-content select=".punchline"></ng-content>
  </p>
<a class="btn btn-warning" (click)="data.toggle()">Tell Me</a>
</div>
`
})
export class JokeComponent implements OnChanges,
  OnInit,
  DoCheck,
  OnDestroy,
  AfterContentInit,
  AfterViewInit {
  @Input('joke') data: Joke;

  constructor() {
    console.log(`new - data is ${this.data}`);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`ngOnChanges - data is ${this.data}`);
    for (let key in changes) {
      console.log(`${key} changed.
Current: ${changes[key].currentValue}.
Previous: ${changes[key].previousValue}`);
    }
  }

  ngOnInit() {
    console.log(`ngOnInit - data is ${this.data}`);
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
}

@Component({
  selector: 'joke-list',
  template: `
    <joke-form (jokeCreated)="jokeCreated($event)"></joke-form>
    <h4>View Jokes</h4>
    <joke *ngFor="let i of jokes" [joke]="i">
      <span class="setup">{{ i.setup }}?</span>
      <h1 class="punchline">{{ i.punchline }}</h1>
    </joke>
    <h4>Content Jokes</h4>
    <button class="btn btn-danger" (click)="jokeCleared()">Clear Jokes</button>
  `
})
export class JokeListComponent implements AfterContentInit,
  AfterViewInit {
  jokes: Joke[] = [new Joke("What did the cheese say when it looked in the mirror", "Hello-me(Halloumi)"),
  new Joke("What kind of cheese do you use to disguise a small horse", "Mask-a-pony(Mascarpone)")
  ];
  @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  constructor() {
    console.log(`new - jokeViewChild is ${this.jokeViewChild}`);
  }

  jokeCreated(joke) {
    this.jokes.unshift(joke);
  }

  jokeCleared() {
    this.jokes = [];
  }

  ngAfterContentInit() {

  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild}`);
    console.log('this.jokeViewChild', this.jokeViewChild);

    let jokes: JokeComponent[] = this.jokeViewChildren.toArray();
    console.log(jokes);

  }
}