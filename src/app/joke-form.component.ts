import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Joke } from './joke-list.component';

@Component
  (
    {
      selector: "joke-form",
      template: `
      <div class="card card-block">
        <h4 class="card-title">Create Joke</h4>
          <div class="form-group">
            <label for="setup">Setup</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter setup" #setup>
          </div>
          <div class="form-group">
            <label for="punchline">Punchline</label>
            <input type="text" class="form-control" id="punchline" placeholder="Enter punchline" #punchline>
          </div>
          <button type="submit" (click)="createJoke(setup.value, punchline.value)" class="btn btn-danger">Add</button>
      </div>
      `
    }
  )
export class JokeFormComponent implements OnInit {
  @Output() jokeCreated = new EventEmitter<Joke>();
  constructor() {

  }

  ngOnInit() {

  }

  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke( setup, punchline));
  }
}