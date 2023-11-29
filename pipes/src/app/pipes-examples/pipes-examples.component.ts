import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-pipes-examples',
  templateUrl: './pipes-examples.component.html',
  styleUrls: ['./pipes-examples.component.scss'],
})
export class PipesExamplesComponent {
  filter = '';

  book = {
    title: 'Learning Angular from Loiane Groner course',
    rating: 4.54321,
    pages: 314,
    price: 45.99,
    releaseDate: new Date(2016, 5, 23),
    url: 'https://www.packtpub.com/web-development/learning-angular-second-edition',
  };

  newCourse = '';

  books = ['Angular2', 'Java'];

  onAddCourse() {
    if (this.newCourse.trim() !== '') {
      this.books.push(this.newCourse);
      this.newCourse = '';
      console.log(this.books);
    }
  }

  getCourses() {
    if (
      this.books.length === 0 ||
      this.filter === undefined ||
      this.filter.trim() === ''
    ) {
      return this.books;
    }

    return this.books.filter(
      (bk) => bk.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1
    );
  }

  asyncValue = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data is here!'), 1000);
  });
}
