import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-ngstyle',
  templateUrl: './directive-ngstyle.component.html',
  styleUrls: ['./directive-ngstyle.component.scss'],
})
export class DirectiveNgstyleComponent {
  active = true;
  fontSize = '14';
}
