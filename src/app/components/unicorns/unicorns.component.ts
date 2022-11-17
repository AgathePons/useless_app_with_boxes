import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-unicorns',
  templateUrl: './unicorns.component.html',
  styleUrls: ['./unicorns.component.scss']
})
export class UnicornsComponent implements OnInit {

  @Input() public value: number = 0;
  @Output() onChangeValue: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public add(number: number): void {
    const newValue = this.value + number;
    this.onChangeValue.emit(newValue);
  }

  public reset(): void {
    this.onChangeValue.emit(0);
  }

}
