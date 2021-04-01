import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
first_name: string = null;
  last_name: string = null;
  date: Date = new Date(2012, 11, 25);
  datepicker: Date = new Date(2012, 11, 25);
  bio: string = null;
  money: string = null;
  iban: string = null;
  email: string = null;
  checkers: string[] = [];
  dinosaurs: string = null;
  favoriteFruit: string = null;
  favoriteMovie: string = null;
  favoriteColor: string = null;
  lyrics: string = null;
  range: number = null;
  terms: string[] = [];
  notifications: boolean = true;
  rsvp: number = 0;
  comments: string = null;

  debug(event) {
    event.preventDefault();
    console.log(event?.target?.modelValue);
    console.log(this);
  }
}
