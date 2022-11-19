import { Component, OnInit } from '@angular/core';
import { HandleModaleHeaderService } from 'src/app/shared/directives/handle-modale-header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private handleModaleHeaderService: HandleModaleHeaderService,
  ) { }

  ngOnInit(): void {
  }

  public onHeaderModalClick(): void {
    this.handleModaleHeaderService.setIsModaleHeaderHidden(false);
  }

}
