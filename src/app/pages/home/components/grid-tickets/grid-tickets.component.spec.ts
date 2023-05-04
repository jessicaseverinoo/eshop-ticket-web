import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTicketsComponent } from './grid-tickets.component';

describe('GridTicketsComponent', () => {
  let component: GridTicketsComponent;
  let fixture: ComponentFixture<GridTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
