import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'joke',
  //templateUrl: './joke.component.html',
  template: `
    <h1>{{setup}} + {{1 + 1}}</h1>
    <p>{{punchline}}</p>
  `,
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  setup: string;
  punchline: string;
  constructor() { }

  ngOnInit() {
    this.setup = "What did the cheese say when it looked in the mirror?";
    this.punchline = "Halloumi (Hello Me)";
  }

}
