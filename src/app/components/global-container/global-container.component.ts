import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HandleModaleHeaderService } from 'src/app/shared/directives/handle-modale-header.service';

@Component({
  selector: 'app-global-container',
  templateUrl: './global-container.component.html',
  styleUrls: ['./global-container.component.scss']
})
export class GlobalContainerComponent implements OnInit {

  public isModaleHeaderHidden$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(
    private handleModaleHeaderService: HandleModaleHeaderService,
  ) { }

  ngOnInit(): void {
    this.isModaleHeaderHidden$ = this.handleModaleHeaderService.isModaleHeaderHidden;
  }

}
