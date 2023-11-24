import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss'],
})
export class OutputPropertyComponent implements AfterViewInit {
  @Input() counter = 0;

  @Output() valueHasChanged = new EventEmitter();
  @ViewChild('inputField') inputFieldValue!: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.inputFieldValue);
  }

  sumValue() {
    this.inputFieldValue.nativeElement.value += 1;
    this.valueHasChanged.emit({ newValue: this.counter });
  }

  subValue() {
    this.inputFieldValue.nativeElement.value -= 1;
    this.valueHasChanged.emit({ newValue: this.counter });
  }
}
