import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSidenavTicketsComponent } from './menu-sidenav-tickets.component';

describe('MenuSidenavTicketsComponent', () => {
  let component: MenuSidenavTicketsComponent;
  let fixture: ComponentFixture<MenuSidenavTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSidenavTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSidenavTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
