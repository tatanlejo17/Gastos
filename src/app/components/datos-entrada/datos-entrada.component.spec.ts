import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosEntradaComponent } from './datos-entrada.component';

describe('DatosEntradaComponent', () => {
  let component: DatosEntradaComponent;
  let fixture: ComponentFixture<DatosEntradaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosEntradaComponent]
    });
    fixture = TestBed.createComponent(DatosEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
