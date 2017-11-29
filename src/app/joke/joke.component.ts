import { Component, OnInit, Input} from '@angular/core';
import {Joke} from '../model/Joke';
@Component({
  selector: 'joke',
  //templateUrl: './joke.component.html',
  template: `
    <div class="card card-block">
      <h4 class="card-title">{{data.setup}}</h4>
      <p class="card-text" [hidden]="data.hide">{{data.punchline}}</p>
      <a (click)="data.toggle()" class="btn btn-warning">Tell Me 1</a>
    </div>
  `,
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  @Input('joke') data: Joke;
  constructor() { }

  ngOnInit() {
  }

}
