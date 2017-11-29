import { Component, OnInit } from '@angular/core';
import {Joke} from '../model/Joke';

@Component({
  selector: 'joke-list',
  // templateUrl: './joke-list.component.html',
  template: `
    <joke-form (jokeCreated)="addJoke($event)">

    </joke-form>
    <joke *ngFor="let joke of jokes" [joke]="joke"></joke>
  `,
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  jokes: Joke[];
  constructor() {
    this.jokes = [
      new Joke ("What did the cheese say when it looked in the mirror?",
        "Hello-Me (Halloumi)"),
      new Joke (
        "What kind of cheese do you use to disguise a small horse?",
        "Mask-a-pony (Mascarpone)"),
      new Joke (
        "A kid threw a lump of cheddar at me",
        "I thought ‘That’s not very mature’")
    ];
   }
  addJoke(joke) {
    this.jokes.unshift(joke)
  }
  toggle(joke) {
    joke.hide = !joke.hide
  }
  ngOnInit() {
  }

}
