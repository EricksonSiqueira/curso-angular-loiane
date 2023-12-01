import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CoursesModule } from './courses/courses.module';
import { StudentsComponent } from './students/students.component';
import { StudentsModule } from './students/students.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoursesModule,
    StudentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
