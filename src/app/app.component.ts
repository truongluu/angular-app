import { Component } from '@angular/core';
import { Joke } from './joke-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  joke: Joke = new Joke('Joke content child', 'Joke content child');
}
