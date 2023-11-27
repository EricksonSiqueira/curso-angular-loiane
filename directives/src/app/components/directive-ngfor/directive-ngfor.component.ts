import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngfor',
  templateUrl: './directive-ngfor.component.html',
  styleUrls: ['./directive-ngfor.component.scss'],
})
export class DirectiveNgforComponent implements OnInit {
  courses = ['Angular', 'React', 'Vue', 'Ember'];

  ngOnInit(): void {
    for (let i = 0; i < this.courses.length; i++) {
      let curso = this.courses[i];
    }
  }
}
