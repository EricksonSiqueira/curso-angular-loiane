import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './components/my-first/my-first.component';
import { MyFirstNgComponent } from './components/my-first-ng/my-first-ng.component';
import { CoursesModule } from './courses/courses.module';

@NgModule({
  declarations: [AppComponent, MyFirstComponent, MyFirstNgComponent],
  imports: [BrowserModule, AppRoutingModule, CoursesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
