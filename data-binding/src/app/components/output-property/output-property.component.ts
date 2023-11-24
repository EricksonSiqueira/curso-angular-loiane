import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss'],
})
export class OutputPropertyComponent {
  @Input() counter = 0;

  @Output() valueHasChanged = new EventEmitter();

  sumValue() {
    this.counter += 1;
    this.valueHasChanged.emit({ newValue: this.counter });
  }

  subValue() {
    this.counter -= 1;
    this.valueHasChanged.emit({ newValue: this.counter });
  }
}
