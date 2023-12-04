import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'rotas';
  courseId = 1;

  showHeader = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.showHeaderEmitter.subscribe((headerVisible) => {
      this.showHeader = headerVisible;
    });
  }
}
