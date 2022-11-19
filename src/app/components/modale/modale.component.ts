import { Component, OnInit } from '@angular/core';
import { HandleModaleHeaderService } from 'src/app/shared/directives/handle-modale-header.service';

@Component({
  selector: 'app-modale',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.scss']
})
export class ModaleComponent implements OnInit {

  constructor(
    private handleModaleHeaderService: HandleModaleHeaderService,
  ) { }

  ngOnInit(): void {
  }

  public onModaleClose(): void {
    this.handleModaleHeaderService.setIsModaleHeaderHidden(true);
  }

}
