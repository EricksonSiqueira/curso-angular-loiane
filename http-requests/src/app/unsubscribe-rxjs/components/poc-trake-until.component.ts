import { Component, OnInit, OnDestroy } from '@angular/core';
import { tap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { EmitValueService } from '../emit-value.service';

@Component({
  selector: 'app-poc-take-until',
  template: `
    <app-poc-base [nome]="nome" [valor]="valor" estilo="bg-primary">
    </app-poc-base>
  `,
})
export class PocTakeUntilComponent implements OnInit, OnDestroy {
  nome = 'Componente com takeUntil';
  valor!: string;

  unsub$ = new Subject();

  constructor(private service: EmitValueService) {}

  ngOnInit() {
    this.service
      .getValue()
      .pipe(
        tap((v) => console.log(this.nome, v)),
        takeUntil(this.unsub$)
      )
      .subscribe((novoValor) => (this.valor = novoValor));
  }

  ngOnDestroy() {
    this.unsub$.next(1);
    this.unsub$.complete();
    console.log(`${this.nome} foi destruido`);
  }
}
