import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-examples',
  templateUrl: './pipes-examples.component.html',
  styleUrls: ['./pipes-examples.component.scss'],
})
export class PipesExamplesComponent {
  book = {
    title: 'Learning Angular from Loiane Groner course',
    rating: 4.54321,
    pages: 314,
    price: 45.99,
    releaseDate: new Date(2016, 5, 23),
    url: 'https://www.packtpub.com/web-development/learning-angular-second-edition',
  };
}
