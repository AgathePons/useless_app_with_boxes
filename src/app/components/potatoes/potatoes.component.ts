import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-potatoes',
  templateUrl: './potatoes.component.html',
  styleUrls: ['./potatoes.component.scss']
})
export class PotatoesComponent implements OnInit, OnChanges {

  @Input() public value: number = 0;
  @Output() onChangeValue: EventEmitter<number> = new EventEmitter<number>();

  public isPopped: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.isPopped = true;
    setTimeout(
      () => {
        this.isPopped = false;
      },
      200
    );
  }

  public add(number: number): void {
    const newValue = this.value + number;
    this.onChangeValue.emit(newValue);
  }

  public reset(): void {
    this.onChangeValue.emit(0);
  }

}
