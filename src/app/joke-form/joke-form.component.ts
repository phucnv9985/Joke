import {EventEmitter, Component, OnInit, Output } from '@angular/core';
import {Joke} from '../model/Joke';

@Component({
  selector: 'joke-form',
  // templateUrl: './joke-form.component.html',
  template: `
    <div class="card card-block">
      <h4 class="card-title">Create Joke</h4>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Enter the setup" #setup>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Enter the punchline" #punchline>
      </div>
      <button type="button" class="btn btn-primary" (click)="createJoke(setup.value, punchline.value)">Create</button>
    </div>
  `,
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {
  // When the jokeCreated event fires we are going to pass out an instance of a Joke.
  @Output() jokeCreated = new EventEmitter<Joke>();

  constructor() { }

  ngOnInit() {
  }

  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }
}
