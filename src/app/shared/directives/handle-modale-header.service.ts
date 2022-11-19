import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleModaleHeaderService {

  private _isModaleHeaderHidden$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  public get isModaleHeaderHidden(): BehaviorSubject<boolean> {
    return this._isModaleHeaderHidden$;
  }

  public setIsModaleHeaderHidden(state: boolean): void {
    this._isModaleHeaderHidden$.next(state);
  }
}
