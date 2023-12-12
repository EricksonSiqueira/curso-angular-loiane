import { Component, OnInit, OnDestroy } from '@angular/core';
import { tap, take } from 'rxjs/operators';
import { EmitValueService } from '../emit-value.service';

@Component({
  selector: 'app-poc-take',
  template: `
    <app-poc-base [nome]="nome" [valor]="valor" estilo="bg-info">
    </app-poc-base>
  `,
})
export class PocTakeComponent implements OnInit, OnDestroy {
  nome = 'Componente com take';
  valor!: string;

  constructor(private service: EmitValueService) {}

  ngOnInit() {
    this.service
      .getValue()
      .pipe(
        tap((v) => console.log(this.nome, v)),
        take(2)
      )
      .subscribe((novoValor) => (this.valor = novoValor));
  }

  ngOnDestroy() {
    console.log(`${this.nome} foi destruido`);
  }
}
