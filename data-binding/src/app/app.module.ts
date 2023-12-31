import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';
import { FormsModule } from '@angular/forms';
import { MyFormModule } from './my-form/my-form.module';
import { InputPropertyComponent } from './components/input-property/input-property.component';
import { OutputPropertyComponent } from './components/output-property/output-property.component';
import { CicleComponent } from './components/cicle/cicle.component';

@NgModule({
  declarations: [AppComponent, DataBindingComponent, InputPropertyComponent, OutputPropertyComponent, CicleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    BsDropdownModule,
    AlertModule,
    FormsModule,
    MyFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
