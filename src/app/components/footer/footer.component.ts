import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HandleModaleHeaderService } from 'src/app/shared/directives/handle-modale-header.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public isModaleHeaderHidden$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public objectBehavior: string = JSON.stringify(this.isModaleHeaderHidden$);

  constructor(
    private handleModaleHeaderService: HandleModaleHeaderService,
  ) { }

  ngOnInit(): void {
    this.isModaleHeaderHidden$ = this.handleModaleHeaderService.isModaleHeaderHidden;
  }

  public onFooterModalClick(): void {
    this.handleModaleHeaderService.setIsModaleHeaderHidden(false);
  }

}
