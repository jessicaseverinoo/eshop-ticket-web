import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTiketComponent } from './new-tiket.component';

describe('NewTiketComponent', () => {
  let component: NewTiketComponent;
  let fixture: ComponentFixture<NewTiketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTiketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTiketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
