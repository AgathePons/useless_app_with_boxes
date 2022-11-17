import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrumpyCatsComponent } from './grumpy-cats.component';

describe('GrumpyCatsComponent', () => {
  let component: GrumpyCatsComponent;
  let fixture: ComponentFixture<GrumpyCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrumpyCatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrumpyCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
