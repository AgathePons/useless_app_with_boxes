import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuteKittensComponent } from './cute-kittens.component';

describe('CuteKittensComponent', () => {
  let component: CuteKittensComponent;
  let fixture: ComponentFixture<CuteKittensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuteKittensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuteKittensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
