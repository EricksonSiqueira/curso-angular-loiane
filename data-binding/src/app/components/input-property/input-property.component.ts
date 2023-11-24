import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss'],
  // inputs: ['courseName', 'otherCourseName:otherName']
})
export class InputPropertyComponent {
  @Input() courseName: string = '';
  @Input('otherName') otherCourseName: string = '';
}
