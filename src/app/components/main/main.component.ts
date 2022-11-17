import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public unicornsValue: number = 0;
  public potatoesValue: number = 0;
  public cuteKittensValue: number = 0;
  public grumpyCatsValue: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public addToAll(number: number): void {
    this.unicornsValue += number;
    this.potatoesValue += number;
    this.cuteKittensValue += number;
    this.grumpyCatsValue += number;
  }
  public resetAll(): void {
    this.unicornsValue = 0;
    this.potatoesValue = 0;
    this.cuteKittensValue = 0;
    this.grumpyCatsValue = 0;
  }

  public onUnicornsChange(number: number): void {
    this.unicornsValue = number;
  }

  public onPotatoesChange(number: number): void {
    this.potatoesValue = number;
  }

  public onCuteKittensChange(number: number): void {
    this.cuteKittensValue = number;
  }

}
