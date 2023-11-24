import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterViewChecked,
  OnDestroy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-cicle',
  templateUrl: './cicle.component.html',
  styleUrls: ['./cicle.component.scss'],
})
export class CicleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentChecked,
    AfterViewChecked,
    OnDestroy
{
  @Input() initialValue = 10;

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
