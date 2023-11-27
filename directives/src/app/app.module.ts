import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveNgifComponent } from './components/directive-ngif/directive-ngif.component';
import { DirectiveNgswitchComponent } from './components/directive-ngswitch/directive-ngswitch.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DirectiveNgforComponent } from './components/directive-ngfor/directive-ngfor.component';
import { DirectiveNgclassComponent } from './components/directive-ngclass/directive-ngclass.component';
import { DirectiveNgstyleComponent } from './components/directive-ngstyle/directive-ngstyle.component';
import { FormsModule } from '@angular/forms';
import { ElvisOperatorComponent } from './components/elvis-operator/elvis-operator.component';
import { NgContentExampleComponent } from './components/ng-content-example/ng-content-example.component';
import { YellowBgDirective } from './directives/yellow-bg.directive';
import { CustomDirectivesComponent } from './components/custom-directives/custom-directives.component';
import { HighlightMouseDirective } from './directives/highlight-mouse.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveNgifComponent,
    DirectiveNgswitchComponent,
    DirectiveNgforComponent,
    DirectiveNgclassComponent,
    DirectiveNgstyleComponent,
    ElvisOperatorComponent,
    NgContentExampleComponent,
    YellowBgDirective,
    CustomDirectivesComponent,
    HighlightMouseDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
