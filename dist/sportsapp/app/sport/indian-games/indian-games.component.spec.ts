import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianGamesComponent } from './indian-games.component';

describe('IndianGamesComponent', () => {
  let component: IndianGamesComponent;
  let fixture: ComponentFixture<IndianGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndianGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
