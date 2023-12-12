import { Component, OnInit } from '@angular/core';
import { EmitValueService } from '../emit-value.service';

@Component({
  selector: 'app-unsubscribe-poc',
  templateUrl: './unsubscribe-poc.component.html',
  styleUrls: ['./unsubscribe-poc.component.scss'],
})
export class UnsubscribePocComponent implements OnInit {
  mostrarComponentes = true;

  constructor(private service: EmitValueService) {}

  ngOnInit() {}

  emitirValor(valor: string) {
    this.service.emitValue(valor);
  }

  destruirComponentes() {
    this.mostrarComponentes = !this.mostrarComponentes;
  }
}
