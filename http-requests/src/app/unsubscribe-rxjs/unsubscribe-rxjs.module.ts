import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnsubscribeRxjsRoutingModule } from './unsubscribe-rxjs-routing.module';
import { UnsubscribePocComponent } from './unsubscribe-poc/unsubscribe-poc.component';
import { PocComponent } from './components/poc.component';
import { PocAsyncComponent } from './components/poc-async.component';
import { PocBaseComponent } from './poc-base/poc-base.component';
import { PocTakeUntilComponent } from './components/poc-trake-until.component';
import { PocTakeComponent } from './components/poc-take.component';
import { PocUnsubComponent } from './components/poc-unsub.component';

@NgModule({
  imports: [CommonModule, UnsubscribeRxjsRoutingModule],
  declarations: [
    UnsubscribePocComponent,
    PocComponent,
    PocAsyncComponent,
    PocTakeUntilComponent,
    PocTakeComponent,
    PocUnsubComponent,
    PocBaseComponent,
  ],
  exports: [PocComponent],
})
export class UnsubscribeRxjsModule {}
