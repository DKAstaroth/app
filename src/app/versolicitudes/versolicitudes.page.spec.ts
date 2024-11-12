import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VersolicitudesPage } from './versolicitudes.page';

describe('VersolicitudesPage', () => {
  let component: VersolicitudesPage;
  let fixture: ComponentFixture<VersolicitudesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VersolicitudesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
