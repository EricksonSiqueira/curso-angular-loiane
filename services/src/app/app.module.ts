import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { CreateCourseModule } from './components/create-course/create-course.module';
import { LastCreatedCourseComponent } from './components/last-created-course/last-created-course.component';

@NgModule({
  declarations: [AppComponent, CoursesComponent],
  imports: [BrowserModule, AppRoutingModule, CreateCourseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
