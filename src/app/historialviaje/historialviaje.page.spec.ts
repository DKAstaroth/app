import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialviajePage } from './historialviaje.page';

describe('HistorialviajePage', () => {
  let component: HistorialviajePage;
  let fixture: ComponentFixture<HistorialviajePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialviajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
