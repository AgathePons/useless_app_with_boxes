import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-grumpy-cats',
  templateUrl: './grumpy-cats.component.html',
  styleUrls: ['./grumpy-cats.component.scss']
})
export class GrumpyCatsComponent implements OnInit, OnChanges {

  @Input() public value: number = 0;
  @Output() onChangeValue: EventEmitter<number> = new EventEmitter<number>();

  public isPopped: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(_changes: SimpleChanges) {
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
