import { Component, OnInit, OnDestroy } from '@angular/core';
import { tap } from 'rxjs/operators';
import { EmitValueService } from '../emit-value.service';

@Component({
  selector: 'app-poc',
  template: `
    <app-poc-base [nome]="nome" [valor]="valor" estilo="bg-danger">
    </app-poc-base>
  `,
})
export class PocComponent implements OnInit, OnDestroy {
  nome = 'Componente sem unsubscribe';
  valor!: string;

  constructor(private service: EmitValueService) {}

  ngOnInit() {
    this.service
      .getValue()
      .pipe(tap((v) => console.log(this.nome, v)))
      .subscribe((novoValor) => (this.valor = novoValor));
  }

  ngOnDestroy() {
    console.log(`${this.nome} foi destruido`);
  }
}
